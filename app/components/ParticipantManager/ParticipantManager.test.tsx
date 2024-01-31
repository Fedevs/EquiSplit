import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import ParticipantManager from '@/app/components/ParticipantManager/ParticipantManager';

describe('ParticipantManager', () => {
  test('renders without errors', () => {
    render(<ParticipantManager />);
    expect(screen.getByTestId('participant-manager'));
  });

  test('adds a participant when clicking "Add" button', () => {
    render(<ParticipantManager />);

    // Write a name on the input related to this label
    const input = screen.getByLabelText('Add participant:');
    fireEvent.change(input, {
      target: { value: 'Lio Messi' },
    });

    // Click on button "Add"
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);

    // Find that name
    expect(
      screen.getByText('Lio Messi')
    ).toBeInTheDocument();
  });

  test('displays an error message for duplicate names', () => {
    render(<ParticipantManager />);

    const input = screen.getByLabelText('Add participant:');
    fireEvent.change(input, {
      target: { value: 'Lio Messi' },
    });

    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);

    expect(
      screen.getByText(/\bconsider using a nickname\b/i)
    ).toBeInTheDocument();
  });
});
