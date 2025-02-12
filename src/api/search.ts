import { stocks } from '../data/stocks';

export interface StockInfo {
  ticker: string;
  name: string;
}

export function getStocks(searchTerm: string): StockInfo[] {
  const searchText = searchTerm.toLowerCase();
  return stocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchText) ||
      stock.ticker.toLowerCase().includes(searchText)
  );
}
