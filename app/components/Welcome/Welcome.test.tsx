import { render, screen } from '@testing-library/react';
import Welcome from '@/app/components/Welcome/Welcome';

describe('Welcome', () => {
  test('renders without errors', () => {
    render(<Welcome />);
    expect(screen.getByTestId('welcome'));
  });
});
