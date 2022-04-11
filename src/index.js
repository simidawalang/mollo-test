import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import Layout from './components/layout/Layout';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <Layout>
    <App/>
  </Layout>
</React.StrictMode>);

reportWebVitals();
