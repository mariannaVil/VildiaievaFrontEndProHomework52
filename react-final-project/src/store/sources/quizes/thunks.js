import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/services/creativeCards';
import { moduleName } from './constants';

export const fetchData = createAsyncThunk(`${moduleName}/fetchData`, async () => {
  try {
    const data = await api.creativeCards.get();
    return data;
  } catch (error) {
    console.error('Error fetching quiz cards:', error.message);
    throw error;
  }
});
export default { fetchData };
