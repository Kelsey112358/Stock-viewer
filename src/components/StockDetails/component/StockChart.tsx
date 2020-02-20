import * as React from 'react';

import { Radio } from 'antd';
import { Chart, Geom, Axis, Tooltip, View } from 'bizcharts';
//import DataSet from '@antv/data-set';
export interface StockChartProps {
  selectedRange: string;
  chartData: Array<any>;
  chartRange: Array<any>;
  handleChartChange: any;
}
const getDataFilter = (range: string) => {
  let dataFilter = {
    type: 'pick',
    key: 'symbol',
    value: 'average',
    fields: [] as Array<string>,
  };
  if (range === '1D') {
    dataFilter.fields = ['minute', 'close'];
  } else {
    dataFilter.fields = ['date', 'close'];
  }
  return dataFilter;
};
export const StockChart: React.SFC<StockChartProps> = (props) => {
  const DataSet = require('@antv/data-set');
  const ds = new DataSet.View();
  const dataFilter = getDataFilter(props.selectedRange);
  const dv = ds
    .source(props.chartData)
    .transform(dataFilter)
    .transform({
      type: 'filter',
      callback(row: any) {
        return row.close !== null;
      },
    });
  const scale = {
    close: { range: [0, 1] },
    minute: {
      tickCount: 20,
    },
  };

  return (
    <div className="stock-chart stock-details-section">
      <Chart height={400} data={dv} forceFit>
        <View scale={scale} data={dv}>
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Axis name={dataFilter.fields[0]} />
          <Axis name={dataFilter.fields[1]} />
          <Geom
            type="line"
            position={dataFilter.fields[0] + '*' + dataFilter.fields[1]}
            size={2}
            color="#af3232"
          />
        </View>
      </Chart>
      <Radio.Group defaultValue="1D">
        {props.chartRange.map((r) => (
          <Radio.Button key={r} value={r} onClick={props.handleChartChange}>
            {r}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};
