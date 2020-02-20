export const showAsPercent = (value: number) =>
  value === null ? '' : (value * 100).toFixed(2) + '%';
export const showAsMillion = (value: number) =>
  value === null ? '' : (value / 1000000).toFixed(2) + 'M';
export const showAsBillion = (value: number) =>
  value === null ? '' : (value / 1000000000).toFixed(2) + 'B';
export const showAsKilo = (value: number) =>
  value === null ? '' : (value / 1000).toFixed(3) + 'K';
export const addPercentSymbol = (value: number) =>
  value === null ? '' : value.toFixed(3) + '%';
export const keepThreeDecimals = (value: number) =>
  value === null ? '' : value.toFixed(3);
