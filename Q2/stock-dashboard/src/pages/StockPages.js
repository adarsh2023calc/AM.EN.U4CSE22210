// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import StockPage from './pages/StockPage';
import HeatmapPage from './pages/HeatmapPage';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stock Aggregator Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<StockPage />} />
          <Route path="/heatmap" element={<HeatmapPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;


// File: src/pages/StockPage.js
import React from 'react';
import { Typography } from '@mui/material';

function StockPage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Stock Price Chart
      </Typography>
      {/* TODO: Add chart, average line, and time interval selector */}
    </div>
  );
}

export default StockPage;


// File: src/pages/HeatmapPage.js
import React from 'react';
import { Typography } from '@mui/material';

function HeatmapPage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Correlation Heatmap
      </Typography>
      {/* TODO: Add heatmap, hover stats, and legend */}
    </div>
  );
}

export default HeatmapPage;


// File: src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
