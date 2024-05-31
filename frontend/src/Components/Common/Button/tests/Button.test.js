import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('renders Button component', () => {
  render(<Button>Test Button</Button>);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});
