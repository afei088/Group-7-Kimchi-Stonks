import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from './Auth';

const StockContext = React.createContext();

const URL = process.env.REACT_APP_API_URL;

const TIME_PERIOD_MAP = {
  DAY: 'intraday',
  WEEK: 'daily',
  MONTH: 'monthly',
  YEAR: 'yearly',
};

function StockProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [stockData, setStockData] = useState(undefined);

  function retrieveStockData(stockSymbol, period) {
    // Get stock overview

    const timePeriod = TIME_PERIOD_MAP[period];
    axios.get(`${URL}/dashboard/time-series/${timePeriod}/${stockSymbol}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken.token}`,
      },
    }).then((res) => {
      const { status, data } = res;

      if (status === 200) {
        setStockData(data);
        console.log(data);
      }
    });
  }

  const context = {
    stockData,
    retrieveStockData,
  };

  return (
    <StockContext.Provider value={context}>
      {children}
    </StockContext.Provider>
  );
}

export { StockContext, StockProvider };
