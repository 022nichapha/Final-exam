import { useState, useEffect } from "react";

function ItemForm({ onSubmit, editingItem, onCancel }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    language: "",
  });

  useEffect(() => {
    if (editingItem) {
      setForm({
        title: editingItem.title || "",
        author: editingItem.author || "",
        language: editingItem.language || "",
      });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: "", author: "", language: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
      />
      <input
        name="language"
        placeholder="Language"
        value={form.language}
        onChange={handleChange}
      />
      <button type="submit">{editingItem ? "Update" : "Add"}</button>
      {editingItem && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default ItemForm;
