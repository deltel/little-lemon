import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders text', () => {
    render(<Button>submit</Button>);
    const buttonText = screen.getByText(/submit/i);
    expect(buttonText).toBeInTheDocument();
  });
});
