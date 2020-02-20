import * as React from 'react';
import { Row, Col, Tag } from 'antd';
import { QuoteType, CompanyType } from '../container/StockDetails';

//const profileHead = [{ title: 'Profile', value: 'description' }];
const companyHead = [
  { title: 'EXCHANGE', value: 'exchange' },
  { title: 'CEO', value: 'CEO' },
  { title: 'INDUSTRY', value: 'industry' },
  { title: 'SECTOR', value: 'sector' },
  { title: 'WEBSITE', value: 'website' },
  { title: 'TAGS', value: 'tags' },
];
const quoteHead = [
  { title: 'VOLUME', value: 'latestVolume' },
  { title: 'AVG DAILY VOLUME', value: 'avgTotalVolume' },
  { title: 'OPEN', value: 'open' },
  { title: 'CHANGE', value: 'change' },
  { title: '52 WEEK HIGH', value: 'week52High' },
  { title: '52 WEEK LOW', value: 'week52Low' },
  { title: 'MARKET CAP', value: 'marketCap' },
  { title: 'PREVIOUS CLOSE', value: 'previousClose' },
  { title: 'P/E RATIO', value: 'peRatio' },
  { title: 'YTD CHANGE', value: 'ytdChange' },
  { title: 'IEX VOLUME', value: 'iexVolume' },
  { title: 'IEX MKT SHARE', value: 'iexMarketPercent' },
];
export interface StockProfileProps {
  company: CompanyType;
  quote: QuoteType;
}
export const StockProfile: React.SFC<StockProfileProps> = (props) => {
  return (
    <div className="stock-profile stock-details-section">
      <h2 className="section-title">Profile</h2>
      <Row type="flex" justify="space-between">
        <Col span={11}>
          <Row>
            <p>{props.company.description}</p>
          </Row>
          <Row>
            {companyHead.map((c, index) => (
              <Col span={index > 4 ? 24 : 12} key={c.title}>
                <p className="title">{c.title}</p>
                {props.company[c.value] instanceof Array ? (
                  <div>
                    {props.company[c.value].map((a: string) => (
                      <Tag key={a}>{a}</Tag>
                    ))}
                  </div>
                ) : (
                  <p className="value">{props.company[c.value]}</p>
                )}
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={12}>
          {quoteHead.map((q, index) => (
            <Col span={12} key={q.title}>
              <p className="title">{q.title}</p>
              <p className="value">{props.quote[q.value]}</p>
            </Col>
          ))}
        </Col>
      </Row>
    </div>
  );
};
