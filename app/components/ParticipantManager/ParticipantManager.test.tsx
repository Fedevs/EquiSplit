import { render, screen } from '@testing-library/react';
import ParticipantManager from '@/app/components/ParticipantManager/ParticipantManager';

describe('ParticipantManager', () => {
  test('renders without errors', () => {
    render(<ParticipantManager />);
    expect(screen.getByTestId('participant-manager'));
  });
});
