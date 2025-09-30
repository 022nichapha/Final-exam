import React, { useState, useEffect } from 'react';
import { ItemTypes } from '../constants/constants';

export default function ModalForm({ show, setShow, type, mode, formData, setFormData, onSubmit }) {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, [formData, type]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title || formData.title.trim() === '') newErrors.title = 'Title is required';
    if (!formData.author || formData.author.trim() === '') newErrors.author = 'Author is required';

    if (type === ItemTypes.BOOK || type === ItemTypes.JOURNAL) {
      if (!formData.publisher || formData.publisher.trim() === '') newErrors.publisher = 'Publisher is required';
    }

    if (type === ItemTypes.COMIC) {
      if (!formData.illustrator || formData.illustrator.trim() === '') newErrors.illustrator = 'Illustrator is required';
      if (!formData.series || formData.series.trim() === '') newErrors.series = 'Series is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit();
    }
  };

  const renderFields = () => {
    switch (type) {
      case ItemTypes.BOOK:
        return (
          <>
            <label>Title</label>
            <input name="title" value={formData.title} onChange={handleChange} className="input" />
            {errors.title && <p className="text-red-500">{errors.title}</p>}

            <label>Author</label>
            <input name="author" value={formData.author} onChange={handleChange} className="input" />
            {errors.author && <p className="text-red-500">{errors.author}</p>}

            <label>Publisher</label>
            <input name="publisher" value={formData.publisher} onChange={handleChange} className="input" />
            {errors.publisher && <p className="text-red-500">{errors.publisher}</p>}
          </>
        );
      case ItemTypes.JOURNAL:
        return (
          <>
            <label>Title</label>
            <input name="title" value={formData.title} onChange={handleChange} className="input" />
            {errors.title && <p className="text-red-500">{errors.title}</p>}

            <label>Author</label>
            <input name="author" value={formData.author} onChange={handleChange} className="input" />
            {errors.author && <p className="text-red-500">{errors.author}</p>}

            <label>Publisher</label>
            <input name="publisher" value={formData.publisher} onChange={handleChange} className="input" />
            {errors.publisher && <p className="text-red-500">{errors.publisher}</p>}

            <label>Volume</label>
            <input name="volume" value={formData.volume} onChange={handleChange} className="input" />

            <label>Issue</label>
            <input name="issue" value={formData.issue} onChange={handleChange} className="input" />
          </>
        );
      case ItemTypes.COMIC:
        return (
          <>
            <label>Title</label>
            <input name="title" value={formData.title} onChange={handleChange} className="input" />
            {errors.title && <p className="text-red-500">{errors.title}</p>}

            <label>Author</label>
            <input name="author" value={formData.author} onChange={handleChange} className="input" />
            {errors.author && <p className="text-red-500">{errors.author}</p>}

            <label>Illustrator</label>
            <input name="illustrator" value={formData.illustrator} onChange={handleChange} className="input" />
            {errors.illustrator && <p className="text-red-500">{errors.illustrator}</p>}

            <label>Series</label>
            <input name="series" value={formData.series} onChange={handleChange} className="input" />
            {errors.series && <p className="text-red-500">{errors.series}</p>}

            <label>Publisher</label>
            <input name="publisher" value={formData.publisher} onChange={handleChange} className="input" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-3xl w-96 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">{mode === 'create' ? 'Add' : mode === 'edit' ? 'Edit' : 'View'} {type}</h2>
        <div className="flex flex-col gap-3">{renderFields()}</div>
        <div className="mt-6 flex justify-end gap-4">
          <button onClick={() => setShow(false)} className="px-4 py-2 rounded-xl border">Cancel</button>
          {mode !== 'view' && (
            <button onClick={handleSubmit} className="px-4 py-2 rounded-xl bg-blue-500 text-white">Save</button>
          )}
        </div>
      </div>
    </div>
  );
}
