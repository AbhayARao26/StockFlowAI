
import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import StockTable from '@/components/stocks/StockTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWatchlist, removeFromWatchlist, Stock } from '@/lib/mockData';
import { useToast } from '@/components/ui/use-toast';

const Watchlist = () => {
  const { toast } = useToast();
  const [watchlistStocks, setWatchlistStocks] = React.useState(getWatchlist());
  const [sortKey, setSortKey] = React.useState<keyof Stock>('symbol');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const handleRemoveFromWatchlist = (symbol: string) => {
    removeFromWatchlist(symbol);
    setWatchlistStocks(getWatchlist());
    
    toast({
      title: "Removed from Watchlist",
      description: `${symbol} has been removed from your watchlist.`,
      variant: "default",
    });
  };

  const handleSort = (key: keyof Stock) => {
    if (sortKey === key) {
      // Toggle direction if same key
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New sort key, default to ascending
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 flex items-center">
          <Star className="h-6 w-6 mr-2 text-stockflow-gold" /> Your Watchlist
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Track and monitor your favorite stocks
        </p>
      </div>
      
      {watchlistStocks.length > 0 ? (
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-between items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {watchlistStocks.length} stocks in your watchlist
              </div>
              <Link to="/explorer">
                <Button variant="outline" size="sm" className="flex items-center">
                  <PlusCircle className="h-4 w-4 mr-1" />
                  Add More
                </Button>
              </Link>
            </div>
            
            <StockTable
              stocks={watchlistStocks}
              onSort={handleSort}
              sortKey={sortKey}
              sortDirection={sortDirection}
            />
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <Star className="h-16 w-16 text-gray-300 dark:text-gray-700 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Your watchlist is empty</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 text-center max-w-md">
            Add stocks to your watchlist to track their performance and keep an eye on price changes.
          </p>
          <Link to="/explorer">
            <Button className="bg-stockflow-gold hover:bg-stockflow-darkGold">
              <PlusCircle className="h-4 w-4 mr-2" />
              Browse Stocks
            </Button>
          </Link>
        </div>
      )}
    </PageContainer>
  );
};

export default Watchlist;
