
import {render } from '@testing-library/react';
import { PriceCard } from './PriceCard';

describe('PriceCard', () => {
  it('should render price card with price and ticker', () => {
    render(<PriceCard price={{open: 100, close: 200, high: 250, low: 90, date: '2025-02-01'}} ticker={'AAPL'} />);
  });
}); 

