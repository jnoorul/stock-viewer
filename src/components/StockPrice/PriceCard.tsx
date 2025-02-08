import { Price } from "../../api/stock-price";
import { LabelValue } from "../common/LabelValue";

export function PriceCard({ price, ticker }: PriceCardProps) {
  return (
    <div className="px-4 py-1 sm:w-full md:w-80">
      <LabelValue label="Ticker" value={ticker} />
      <LabelValue label="Open" value={price.open} />
      <LabelValue label="Close" value={price.close} />
      <LabelValue label="High" value={price.high} />
      <LabelValue label="Low" value={price.low} />
      <LabelValue label="Date" value={price.date} />
    </div>
  );
}

interface PriceCardProps {
  price: Price;
  ticker: string;
}