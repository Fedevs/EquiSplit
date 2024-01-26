import { render, screen } from '@testing-library/react';
import Stepper from '@/app/components/Stepper/Stepper';

describe('Stepper', () => {
  test('renders without errors', () => {
    render(<Stepper />);
    expect(screen.getByTestId('stepper'));
  });
});
