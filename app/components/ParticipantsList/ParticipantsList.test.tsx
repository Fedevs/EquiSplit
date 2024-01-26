import { render, screen } from '@testing-library/react';
import ParticipantsList from '@/app/components/ParticipantsList/ParticipantsList';

describe('ParticipantsList', () => {
  test('renders without errors', () => {
    render(<ParticipantsList />);
    expect(screen.getByTestId('participants-list'));
  });
});
