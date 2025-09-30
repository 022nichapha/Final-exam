import { ItemTypes, ItemStatus } from '../constants/constants';

export const getEmptyFormData = (type) => {
  const base = {
    title: '',
    author: '',
    category: '',
    publishYear: new Date().getFullYear(),
    isbn: '',
    publisher: '',
    status: ItemStatus.AVAILABLE,
    coverImage: '',
    description: '',
    location: ''
  };

  if (type === ItemTypes.BOOK) {
    return { ...base, edition: '', pageCount: 0, language: '', genre: '' };
  } else if (type === ItemTypes.JOURNAL) {
    return { ...base, issn: '', volume: '', issue: '', publicationFrequency: '' };
  } else {
    return { ...base, series: '', volumeNumber: 0, illustrator: '', colorType: '', targetAge: '' };
  }
};

export const filterItems = (items, searchTerm) => {
  return items.filter(item =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
