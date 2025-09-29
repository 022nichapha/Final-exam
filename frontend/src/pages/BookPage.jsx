import { useEffect, useState } from "react";
import api from "../api";
import ItemForm from "../components/itemformtemform"; // อาจมีชื่อไฟล์ผิดด้วย? ดูด้านล่าง
import ItemTable from "../components/itemtable";

function BookPage() {
  const [books, setBooks] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const fetchBooks = () => {
    api
      .get("/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAdd = async (newBook) => {
    try {
      await api.post("/books", newBook);
      fetchBooks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (updatedBook) => {
    try {
      await api.put(`/books/${editingItem._id}`, updatedBook);
      setEditingItem(null);
      fetchBooks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      fetchBooks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Books</h1>
      <ItemForm
        onSubmit={editingItem ? handleUpdate : handleAdd}
        editingItem={editingItem}
        onCancel={() => setEditingItem(null)}
      />
      <ItemTable
        items={books}
        onEdit={(item) => setEditingItem(item)}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default BookPage;
