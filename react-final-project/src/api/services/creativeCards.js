import axios from '../initial';

const creativeCards = {
  get: async () => {
    try {
      const response = await axios.get('/quizCards');
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response.data;
    } catch (error) {
      console.error('Error fetching quiz cards:', error.message);
      throw error;
    }
  },
};

export default { creativeCards };
