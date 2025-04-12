import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import { PieChart as PieChartIcon, LineChart as LineChartIcon, BarChart3 } from 'lucide-react';

// Mock data for sector distribution
const sectorData = [
  { name: 'Technology', value: 47 },
  { name: 'Consumer Cyclical', value: 16 },
  { name: 'Communication Services', value: 19 },
  { name: 'Healthcare', value: 5 },
  { name: 'Financial Services', value: 8 },
  { name: 'Consumer Defensive', value: 5 },
];

// Mock data for Price vs P/E Ratio
const priceVsPEData = [
  { name: 'AAPL', price: 180, peRatio: 30 },
  { name: 'GOOGL', price: 140, peRatio: 25 },
  { name: 'TSLA', price: 250, peRatio: 70 },
  { name: 'JPM', price: 160, peRatio: 15 },
  { name: 'JNJ', price: 155, peRatio: 20 },
  { name: 'UNH', price: 450, peRatio: 35 },
  { name: 'BAC', price: 35, peRatio: 10 },
];

// Mock data for volume comparison
const volumeData = [
  { name: 'TSLA', volume: 85 },
  { name: 'AAPL', volume: 75 },
  { name: 'NVDA', volume: 65 },
  { name: 'BAC', volume: 55 },
  { name: 'AMZN', volume: 45 },
  { name: 'MSFT', volume: 35 },
  { name: 'GOOGL', volume: 25 },
  { name: 'META', volume: 20 },
  { name: 'JPM', volume: 15 },
  { name: 'WMT', volume: 10 },
];

const COLORS = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];

const Insights = () => {
  return (
    <PageContainer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Market Insights</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Analyze market trends and sector performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <PieChartIcon className="h-5 w-5 text-primary" />
              Sector Distribution by Market Cap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <LineChartIcon className="h-5 w-5 text-primary" />
              Price vs P/E Ratio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceVsPEData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8b5cf6" />
                  <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
                  <Tooltip />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="price"
                    stroke="#8b5cf6"
                    name="Price ($)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="peRatio"
                    stroke="#10b981"
                    name="P/E Ratio"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Volume Comparison (Top 10 Stocks)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <defs>
                  <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="volume"
                  stroke="#8b5cf6"
                  fill="url(#volumeGradient)"
                  name="Volume (M)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default Insights; 