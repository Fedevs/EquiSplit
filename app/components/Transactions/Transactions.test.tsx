import { render, screen } from '@testing-library/react';
import Transactions from '@/app/components/Transactions/Transactions';

describe('Transactions', () => {
  test('renders without errors', () => {
    render(<Transactions />);
    expect(screen.getByTestId('transactions'));
  });
});
