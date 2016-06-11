import {cumulative} from '../index';

describe('cumulative', () => {
  it(`extracts, aggregate, and cumulate costs from different categories`, () => {
    const costsObject = {
      '2016-01': {costs1: 1, costs2: 2, costs3: 3},
      '2016-02': {costs1: 2, costs2: 3, costs3: 4},
      '2016-03': {costs1: 3, costs2: 4, costs3: 5},
    }
    const expected = {
      months: [ '2016-01', '2016-02', '2016-03' ],
      costs1: [ 1, 2, 3 ],
      costs2: [ 2, 3, 4 ],
      costs3: [ 3, 4, 5 ],
      totalCosts: [ 6, 9, 12 ],
      totalCumulativeCosts: [ 6, 15, 27 ]
    };
    expect(cumulative(costsObject)).toEqual(expected);
  });
});
