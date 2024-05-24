import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should have a heading', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
