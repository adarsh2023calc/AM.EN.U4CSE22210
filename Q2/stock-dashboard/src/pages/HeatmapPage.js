import { useEffect, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { fetchAverageData } from '../api/average';

function HeatmapPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const minutes = 10; // You can make this dynamic later

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchAverageData(minutes);
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Correlation Heatmap
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre> 
      )}
    </div>
  );
}

export default HeatmapPage;
