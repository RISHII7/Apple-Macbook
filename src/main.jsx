import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Fix semver error by polyfilling process.env if needed
if (typeof globalThis.process === 'undefined') {
  globalThis.process = { env: {} };
}
if (typeof globalThis.process.env === 'undefined') {
  globalThis.process.env = {};
}
// Ensure version is available to prevent semver errors
if (!globalThis.process.env.npm_package_version) {
  globalThis.process.env.npm_package_version = '0.0.0';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
