import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import Stepper from '@/app/components/Stepper/Stepper';

describe('Stepper', () => {
  test('renders without errors', () => {
    render(<Stepper />);
    expect(screen.getByTestId('stepper'));
  });

  test('displays all buttons', () => {
    render(<Stepper />);

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);

    const calculateButton = screen.getByText('Calculate');
    expect(calculateButton).toBeInTheDocument();

    const input = screen.getByLabelText('Add participant');
    fireEvent.change(input, {
      target: { value: 'Lio Messi' },
    });

    const addButton = screen.getByText('ADD');
    fireEvent.click(addButton);

    fireEvent.change(input, {
      target: { value: 'Di Maria' },
    });

    fireEvent.click(addButton);

    fireEvent.click(calculateButton);

    const restartButton = screen.getByText('Restart');
    expect(restartButton).toBeInTheDocument();
  });
});
