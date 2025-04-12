
// Mock stock data for Indian market
export interface Stock {
  symbol: string;
  name: string;
  price: number;
  previousClose: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  sector: string;
  high52Week: number;
  low52Week: number;
  peRatio?: number;
  eps?: number;
  dividend?: number;
  beta?: number;
}

export interface StockHistoryData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// Create 30 mock stocks from various sectors in the Indian market
export const mockStocks: Stock[] = [
  // IT Sector
  {
    symbol: "TCS",
    name: "Tata Consultancy Services Ltd.",
    price: 3912.45,
    previousClose: 3875.20,
    change: 37.25,
    changePercent: 0.96,
    volume: 1542876,
    marketCap: 14350000000000,
    sector: "IT",
    high52Week: 4043.50,
    low52Week: 3056.75,
    peRatio: 29.8,
    eps: 131.25,
    dividend: 110.00,
    beta: 0.78
  },
  {
    symbol: "INFY",
    name: "Infosys Ltd.",
    price: 1642.30,
    previousClose: 1655.85,
    change: -13.55,
    changePercent: -0.82,
    volume: 2563941,
    marketCap: 6825000000000,
    sector: "IT",
    high52Week: 1755.60,
    low52Week: 1215.45,
    peRatio: 27.4,
    eps: 59.86,
    dividend: 42.00,
    beta: 0.65
  },
  {
    symbol: "WIPRO",
    name: "Wipro Ltd.",
    price: 478.55,
    previousClose: 482.20,
    change: -3.65,
    changePercent: -0.76,
    volume: 3256984,
    marketCap: 2620000000000,
    sector: "IT",
    high52Week: 494.90,
    low52Week: 352.65,
    peRatio: 20.1,
    eps: 23.86,
    dividend: 7.00,
    beta: 0.72
  },
  {
    symbol: "HCLTECH",
    name: "HCL Technologies Ltd.",
    price: 1286.75,
    previousClose: 1275.60,
    change: 11.15,
    changePercent: 0.87,
    volume: 1356987,
    marketCap: 3485000000000,
    sector: "IT",
    high52Week: 1380.45,
    low52Week: 1005.30,
    peRatio: 21.3,
    eps: 60.47,
    dividend: 32.00,
    beta: 0.68
  },
  {
    symbol: "TECHM",
    name: "Tech Mahindra Ltd.",
    price: 1189.25,
    previousClose: 1204.50,
    change: -15.25,
    changePercent: -1.27,
    volume: 1458963,
    marketCap: 1158000000000,
    sector: "IT",
    high52Week: 1324.75,
    low52Week: 943.60,
    peRatio: 19.8,
    eps: 60.08,
    dividend: 25.00,
    beta: 0.81
  },

  // Banking & Financial Sector
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank Ltd.",
    price: 1674.85,
    previousClose: 1665.35,
    change: 9.50,
    changePercent: 0.57,
    volume: 4235689,
    marketCap: 12450000000000,
    sector: "Banking",
    high52Week: 1757.90,
    low52Week: 1363.45,
    peRatio: 22.6,
    eps: 74.18,
    dividend: 18.00,
    beta: 0.92
  },
  {
    symbol: "ICICIBANK",
    name: "ICICI Bank Ltd.",
    price: 1023.45,
    previousClose: 1014.80,
    change: 8.65,
    changePercent: 0.85,
    volume: 3985421,
    marketCap: 7140000000000,
    sector: "Banking",
    high52Week: 1083.55,
    low52Week: 824.20,
    peRatio: 20.4,
    eps: 50.15,
    dividend: 11.00,
    beta: 1.05
  },
  {
    symbol: "SBIN",
    name: "State Bank of India",
    price: 745.30,
    previousClose: 739.55,
    change: 5.75,
    changePercent: 0.78,
    volume: 5236974,
    marketCap: 6650000000000,
    sector: "Banking",
    high52Week: 769.80,
    low52Week: 524.10,
    peRatio: 10.5,
    eps: 70.72,
    dividend: 14.00,
    beta: 1.21
  },
  
  // Oil & Gas Sector
  {
    symbol: "RELIANCE",
    name: "Reliance Industries Ltd.",
    price: 2745.65,
    previousClose: 2756.30,
    change: -10.65,
    changePercent: -0.39,
    volume: 2458963,
    marketCap: 18560000000000,
    sector: "Oil & Gas",
    high52Week: 2855.10,
    low52Week: 2140.30,
    peRatio: 25.8,
    eps: 106.36,
    dividend: 9.00,
    beta: 1.12
  },
  {
    symbol: "ONGC",
    name: "Oil and Natural Gas Corporation Ltd.",
    price: 268.45,
    previousClose: 271.20,
    change: -2.75,
    changePercent: -1.01,
    volume: 4125963,
    marketCap: 3370000000000,
    sector: "Oil & Gas",
    high52Week: 285.45,
    low52Week: 157.35,
    peRatio: 8.3,
    eps: 32.38,
    dividend: 10.50,
    beta: 1.35
  },
  
  // Automotive Sector
  {
    symbol: "TATAMOTORS",
    name: "Tata Motors Ltd.",
    price: 892.35,
    previousClose: 880.15,
    change: 12.20,
    changePercent: 1.39,
    volume: 3654789,
    marketCap: 3425000000000,
    sector: "Automotive",
    high52Week: 950.75,
    low52Week: 513.80,
    peRatio: 19.2,
    eps: 46.44,
    dividend: 2.00,
    beta: 1.47
  },
  {
    symbol: "M&M",
    name: "Mahindra & Mahindra Ltd.",
    price: 1875.30,
    previousClose: 1858.65,
    change: 16.65,
    changePercent: 0.90,
    volume: 1235698,
    marketCap: 2335000000000,
    sector: "Automotive",
    high52Week: 1924.55,
    low52Week: 1365.25,
    peRatio: 22.6,
    eps: 82.88,
    dividend: 12.50,
    beta: 1.18
  },
  
  // FMCG Sector
  {
    symbol: "ITC",
    name: "ITC Ltd.",
    price: 432.85,
    previousClose: 435.60,
    change: -2.75,
    changePercent: -0.63,
    volume: 4589632,
    marketCap: 5410000000000,
    sector: "FMCG",
    high52Week: 499.60,
    low52Week: 325.75,
    peRatio: 23.8,
    eps: 18.17,
    dividend: 12.00,
    beta: 0.57
  },
  {
    symbol: "HINDUNILVR",
    name: "Hindustan Unilever Ltd.",
    price: 2432.60,
    previousClose: 2451.45,
    change: -18.85,
    changePercent: -0.77,
    volume: 1235698,
    marketCap: 5715000000000,
    sector: "FMCG",
    high52Week: 2768.50,
    low52Week: 2345.80,
    peRatio: 65.3,
    eps: 37.25,
    dividend: 48.00,
    beta: 0.48
  },
  
  // Pharma Sector
  {
    symbol: "SUNPHARMA",
    name: "Sun Pharmaceutical Industries Ltd.",
    price: 1142.85,
    previousClose: 1139.45,
    change: 3.40,
    changePercent: 0.30,
    volume: 1589632,
    marketCap: 2740000000000,
    sector: "Pharmaceutical",
    high52Week: 1198.70,
    low52Week: 921.50,
    peRatio: 33.9,
    eps: 33.68,
    dividend: 8.50,
    beta: 0.64
  },
  {
    symbol: "DRREDDY",
    name: "Dr. Reddy's Laboratories Ltd.",
    price: 5678.45,
    previousClose: 5725.65,
    change: -47.20,
    changePercent: -0.82,
    volume: 456321,
    marketCap: 945000000000,
    sector: "Pharmaceutical",
    high52Week: 5985.35,
    low52Week: 4512.30,
    peRatio: 28.7,
    eps: 197.92,
    dividend: 35.00,
    beta: 0.53
  },
];

// Generate random historical data for a stock over the past year
export const generateMockHistoricalData = (symbol: string, days: number = 365): StockHistoryData[] => {
  const mockHistory: StockHistoryData[] = [];
  const stock = mockStocks.find(s => s.symbol === symbol);
  
  if (!stock) return [];
  
  let basePrice = stock.price * 0.7; // Start around 70% of current price a year ago
  const volatility = 0.015; // Daily volatility factor
  
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) continue;
    
    // Random daily change based on volatility
    const dailyChange = basePrice * (volatility * (Math.random() * 2 - 1));
    const open = basePrice;
    const close = basePrice + dailyChange;
    
    // High is the max of open/close plus some random amount
    const highExtra = basePrice * volatility * Math.random();
    const high = Math.max(open, close) + highExtra;
    
    // Low is the min of open/close minus some random amount
    const lowExtra = basePrice * volatility * Math.random();
    const low = Math.min(open, close) - lowExtra;
    
    // Random volume
    const volume = Math.floor(stock.volume * (0.5 + Math.random()));
    
    mockHistory.push({
      date: date.toISOString().split('T')[0], // Format as YYYY-MM-DD
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume
    });
    
    // Set next day's base price to today's close
    basePrice = close;
  }
  
  return mockHistory;
};

// Function to get top gainers and losers
export const getTopGainers = (limit: number = 5): Stock[] => {
  return [...mockStocks]
    .sort((a, b) => b.changePercent - a.changePercent)
    .slice(0, limit);
};

export const getTopLosers = (limit: number = 5): Stock[] => {
  return [...mockStocks]
    .sort((a, b) => a.changePercent - b.changePercent)
    .slice(0, limit);
};

// Function to filter stocks based on search criteria
export const filterStocks = (
  search: string = "",
  sector?: string,
  minPrice?: number,
  maxPrice?: number
): Stock[] => {
  return mockStocks.filter((stock) => {
    const matchesSearch =
      search === "" ||
      stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
      stock.name.toLowerCase().includes(search.toLowerCase());
      
    const matchesSector = !sector || stock.sector === sector;
    
    const matchesMinPrice = !minPrice || stock.price >= minPrice;
    const matchesMaxPrice = !maxPrice || stock.price <= maxPrice;
    
    return matchesSearch && matchesSector && matchesMinPrice && matchesMaxPrice;
  });
};

// Get market summary stats
export const getMarketSummary = () => {
  const totalStocks = mockStocks.length;
  const gainers = mockStocks.filter(stock => stock.change > 0).length;
  const losers = mockStocks.filter(stock => stock.change < 0).length;
  const unchanged = totalStocks - gainers - losers;
  
  const averageChange = mockStocks.reduce((sum, stock) => sum + stock.changePercent, 0) / totalStocks;
  
  return {
    gainers,
    losers,
    unchanged,
    averageChange: parseFloat(averageChange.toFixed(2))
  };
};

// Get unique sectors from our stock data
export const getUniqueSectors = (): string[] => {
  const sectors = new Set<string>();
  mockStocks.forEach(stock => sectors.add(stock.sector));
  return Array.from(sectors);
};

// Mock watchlist data
let watchlist: string[] = ["TCS", "RELIANCE", "HDFCBANK"];

export const getWatchlist = (): Stock[] => {
  return mockStocks.filter(stock => watchlist.includes(stock.symbol));
};

export const addToWatchlist = (symbol: string): boolean => {
  if (!watchlist.includes(symbol)) {
    watchlist.push(symbol);
    return true;
  }
  return false;
};

export const removeFromWatchlist = (symbol: string): boolean => {
  const initialLength = watchlist.length;
  watchlist = watchlist.filter(s => s !== symbol);
  return watchlist.length !== initialLength;
};

export const isInWatchlist = (symbol: string): boolean => {
  return watchlist.includes(symbol);
};

// Mock chat responses
export const getChatResponse = (message: string): string => {
  message = message.toLowerCase();
  
  if (message.includes("hello") || message.includes("hi ")) {
    return "Hello! I'm your StockFlow assistant. How can I help you with Indian stock market information today?";
  }
  
  if (message.includes("what is") && message.includes("rsi")) {
    return "RSI (Relative Strength Index) is a momentum oscillator that measures the speed and change of price movements. It ranges from 0 to 100, with readings above 70 indicating overbought conditions and readings below 30 indicating oversold conditions.";
  }
  
  if (message.includes("how") && message.includes("stock")) {
    return "You can search for Indian stocks using the search bar at the top, browse the explorer page, or check the market overview on the dashboard. When you find a stock you're interested in, click on it to see detailed information and charts.";
  }
  
  if (message.includes("best performing stock")) {
    const topGainer = getTopGainers(1)[0];
    return `Currently, ${topGainer.name} (${topGainer.symbol}) is the best performing stock in the Indian market with a gain of ${topGainer.changePercent.toFixed(2)}%.`;
  }
  
  if (message.includes("worst performing stock")) {
    const topLoser = getTopLosers(1)[0];
    return `Currently, ${topLoser.name} (${topLoser.symbol}) is the worst performing stock in the Indian market with a drop of ${Math.abs(topLoser.changePercent).toFixed(2)}%.`;
  }
  
  if (message.includes("it stock") || message.includes("technology stock")) {
    const techStocks = mockStocks.filter(stock => stock.sector === "IT");
    return `There are ${techStocks.length} IT stocks available in the Indian market. Some examples include: ${techStocks.slice(0, 3).map(s => s.symbol).join(", ")}. Would you like me to recommend a specific IT stock?`;
  }
  
  if (message.includes("recommend") || message.includes("suggestion")) {
    const randomStock = mockStocks[Math.floor(Math.random() * mockStocks.length)];
    return `You might want to check out ${randomStock.name} (${randomStock.symbol}). It's currently trading at ₹${randomStock.price.toFixed(2)} and is in the ${randomStock.sector} sector of the Indian market.`;
  }
  
  return "I'm not sure how to help with that. You can ask me about specific Indian stocks, market trends, or how to use the StockFlow platform for the Indian market.";
};
