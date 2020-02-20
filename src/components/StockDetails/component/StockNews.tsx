import * as React from 'react';
import { NewsType } from '../container/StockDetails';
import { Row, Col } from 'antd';

export interface StockNewsProps {
  news: Array<NewsType>;
}

export const StockNews: React.SFC<StockNewsProps> = (props) => {
  return (
    <div className="stock-news stock-details-section">
      <h2 className="section-title">News</h2>
      {props.news.map((item) => {
        const datetime = new Date(item.datetime);
        const imageStyle = {
          backgroundImage: `url(${item.image})`,
        };
        const summary =
          item.summary.length < 200
            ? item.summary
            : item.summary.substring(0, 200) + '...';
        return (
          <Row
            key={item.url}
            type="flex"
            justify="space-between"
            className="news-row"
          >
            <Col span={8} className="image-placeholder" style={imageStyle}>
              <a href={item.url}></a>
            </Col>
            <Col span={14}>
              <div>
                <span>{datetime.toUTCString()}</span>
                <span> | </span>
                <span>{item.source}</span>
              </div>
              <div>
                <a href={item.url}>
                  <p className="content-2">{item.headline}</p>
                  <p>{summary}</p>
                  <p>
                    Related:
                    <span className="news-related-tag">{item.related}</span>
                  </p>
                </a>
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};
