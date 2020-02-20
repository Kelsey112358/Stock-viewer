import * as React from 'react';

import { ConnectedBriefingWatchListWrap as BriefingWatchListWrap } from 'src/components/BriefingWatchListWrap/index';
import { ConnectedMarketEarnings as MarketEarnings } from 'src/components/MarketEarnings/index';
import { ConnectedSectorPerformance as SectorPerformance } from 'src/components/SectorPerformance/index';
import { ConnectedLists as Lists } from 'src/components/Lists/index';
import { ConnectedMajorIndex as MajorIndex } from 'src/components/MajorIndex/index';

import './Home.css';

export const Home = () => (
  <div className="main sections">
    <BriefingWatchListWrap />
    <MajorIndex />
    <MarketEarnings />
    <SectorPerformance />
    <Lists />
  </div>
);
