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
      target: { value: 'Fede' },
    });

    fireEvent.click(addButton);

    const messiContributionInput = screen.getByTestId(
      'Lio Messi_contribution'
    );
    const fedeContributionInput = screen.getByTestId(
      'Fede_contribution'
    );
    fireEvent.change(messiContributionInput, {
      target: { value: 200 },
    });
    fireEvent.change(fedeContributionInput, {
      target: { value: 400 },
    });

    fireEvent.click(calculateButton);

    const restartButton = screen.getByText('Restart');
    expect(restartButton).toBeInTheDocument();
  });
});
