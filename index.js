import _ from 'lodash';
 
export function cumulative(costsObject) {
  const [months, costs]= _.unzip(_.toPairs(costsObject).sort());
 
  const getCost = key => costs.map(c => c[key]);
  const costs1 = getCost('costs1');
  const costs2 = getCost('costs2');
  const costs3 = getCost('costs3');
 
  const totalCosts = _.zip(costs1, costs2, costs3)
                      .map(([x, y, a]) => x + y + a);
  const totalCumulativeCosts = [];
  totalCosts.reduce((x, y, i) => totalCumulativeCosts[i] = x + y, 0);
 
  return {
    months,
    costs1,
    costs2,
    costs3,
    totalCosts,
    totalCumulativeCosts
  };
}
