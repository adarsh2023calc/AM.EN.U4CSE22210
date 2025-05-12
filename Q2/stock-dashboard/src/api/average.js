// api/average.js
import axios from 'axios';

export const fetchAverageData = async (minutes) => {
  try {
    const response = await axios.post('http://localhost:8000/average', {
      value: minutes.toString(),
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching average data:', error);
    throw error;
  }
};
