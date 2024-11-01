import httpClient from './http.client';

export const fetchAllCategories = async () => {
  const query = await httpClient.get('/category');
  return query.data;
};
