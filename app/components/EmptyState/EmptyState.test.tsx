import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import EmptyState from './EmptyState';
import ParticipantManager from '../ParticipantManager/ParticipantManager';

describe('Welcome', () => {
  test('renders without errors', () => {
    render(<EmptyState />);
    expect(screen.getByTestId('empty-state'));
  });

  test('empty state with 0 participants', () => {
    render(<EmptyState />);
    expect(
      screen.getByText(
        'Add participants before Keylito gets mad.'
      )
    );
  });

  test('empty state with 1 participant', () => {
    render(<ParticipantManager />);
    expect(
      screen.getByText(
        'Add participants before Keylito gets mad.'
      )
    ).toBeInTheDocument();

    const input = screen.getByLabelText('Add participant');
    fireEvent.change(input, {
      target: { value: 'Lio Messi' },
    });

    const addButton = screen.getByText('ADD');
    fireEvent.click(addButton);

    expect(
      screen.getByText(
        'He has someone to play with, but still needs one more.'
      )
    ).toBeInTheDocument();
  });
});
