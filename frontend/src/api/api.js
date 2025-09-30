import { API_BASE_URL } from '../constants/constants';

export const fetchItems = async (type) => {
  const response = await fetch(`${API_BASE_URL}/${type}`);
  if (!response.ok) throw new Error('Failed to fetch items');
  return response.json();
};

export const deleteItem = async (type, itemId) => {
  const response = await fetch(`${API_BASE_URL}/${type}/${itemId}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete item');
  return response.json();
};

export const saveItem = async (type, item, mode = 'create') => {
  const url = mode === 'create' ? `${API_BASE_URL}/${type}` : `${API_BASE_URL}/${type}/${item.itemId}`;
  const method = mode === 'create' ? 'POST' : 'PUT';

  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });

  if (!response.ok) throw new Error('Failed to save item');
  return response.json();
};
