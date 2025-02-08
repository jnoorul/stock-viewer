import { useEffect, useState } from 'react';
import { getStockPrice, Price } from '../../api/stock-price';
import { Section } from '../common/Section';
import { PriceHistory } from '../PriceHistory/PriceHistory';
import { PriceCard } from './PriceCard';

export function StockPrice({ ticker }: { ticker: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [prices, setPrices] = useState<Price[]>();

  useEffect(() => {
    async function fetchPrice() {
      const price = await getStockPrice(ticker);
      setPrices(price);
      setIsLoading(false);
    }
    fetchPrice();
  }, [ticker]);

  if (isLoading) {
    return <>Loading....</>;
  }

  if (!prices || prices.length === 0) {
    return <>Unable to load the price now, please try again later.</>;
  }

  const [latestPrice, ...historicPrices] = prices;

  return (
    <div>
      <PriceCard ticker={ticker} price={latestPrice} />
      <Section>
        <PriceHistory prices={historicPrices} />
      </Section>
    </div>
  );
}


