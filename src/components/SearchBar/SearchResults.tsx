import { getStocks } from '../../api/search';

interface SearchResultsProps {
  searchText: string;
  onSelect: (ticker: string) => void;
}

export function SearchResults({ searchText, onSelect }: SearchResultsProps) {
  if (searchText.trim().length <= 1) {
    return <></>;
  }
  const stockResults = getStocks(searchText);
  return (
    <ul className="mt-1 border-2 inset-x-0 overflow-y-auto z-50 max-h-96 rounded-md lg:rounded-lg">
      {stockResults.map((stock) => (
        <li
          key={stock.ticker}
          className="p-2 border bg-white cursor-pointer"
          onClick={() => onSelect(stock.ticker)}
        >
          <div className="text-gray-500 text-xs font-semibold">{`Ticker: ${stock.ticker}`}</div>
          <div className="mt-1 text-sm text-secondary-900 font-semibold">
            {stock.name}
          </div>
        </li>
      ))}
    </ul>
  );
}
