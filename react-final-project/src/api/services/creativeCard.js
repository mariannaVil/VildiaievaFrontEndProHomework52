import axios from '../initial';

const creativeCard = {
  get: async (id) => {
    try {
      const response = await axios.get(`/quizCards/${id}`);
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response.data;
    } catch (error) {
      console.error(`Error fetching quiz card with ID ${id}:`, error.message);
      throw error;
    }
  },
};

export default creativeCard;
