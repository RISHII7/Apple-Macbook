import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('contains navigation elements', () => {
    render(<App />);
    // Test for actual content that exists in your app
    expect(document.body.textContent).toContain('Store');
  });
});
