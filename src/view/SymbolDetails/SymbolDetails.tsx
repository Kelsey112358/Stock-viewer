import * as React from 'react';
import { ConnectedStockDetails as StockDetails } from 'src/components/StockDetails/index';

export const SymbolDetails = ({ match }: any) => (
  <div className="sections">
    <StockDetails selectedSymbol={match.params.selectedSymbol} />
  </div>
);
