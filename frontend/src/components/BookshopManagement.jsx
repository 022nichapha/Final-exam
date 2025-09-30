import React, { useEffect, useState } from 'react';
import { ItemTypes } from '../constants/constants';
import { fetchItems, deleteItem, saveItem } from '../api/api';
import ItemCard from './ItemCard';
import ModalForm from './ModalForm';
import { getEmptyFormData, filterItems } from '../utils/helpers';

export default function BookshopManagement() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState(ItemTypes.BOOK);
  const [searchTerm, setSearchTerm] = useState('');
  const [modal, setModal] = useState({ show: false, mode: 'create', data: getEmptyFormData(type) });

  useEffect(() => {
    loadItems();
  }, [type]);

  const loadItems = async () => {
    try {
      const data = await fetchItems(type);
      setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(type, id);
      loadItems();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      await saveItem(type, modal.data, modal.mode);
      setModal({ ...modal, show: false });
      loadItems();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredItems = filterItems(items, searchTerm);

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-xl px-4 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-2xl"
          onClick={() => setModal({ show: true, mode: 'create', data: getEmptyFormData(type) })}
        >
          + เพิ่ม
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <ItemCard
            key={item.itemId}
            item={item}
            type={type}
            onView={(data) => setModal({ show: true, mode: 'view', data })}
            onEdit={(data) => setModal({ show: true, mode: 'edit', data })}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <ModalForm
        show={modal.show}
        setShow={(show) => setModal({ ...modal, show })}
        type={type}
        mode={modal.mode}
        formData={modal.data}
        setFormData={(data) => setModal({ ...modal, data })}
        onSubmit={handleSave}
      />
    </div>
  );
}
