import R from 'ramda';
 
export function cumulative(costsObject) {
  const [months, costs]= R.transpose(R.toPairs(costsObject).sort());
 
  const getCostsByCategory = category => R.pluck(category, costs)
  const costs1 = getCostsByCategory('costs1');
  const costs2 = getCostsByCategory('costs2');
  const costs3 = getCostsByCategory('costs3');
 
  const totalCosts = R.transpose([costs1, costs2, costs3]).map(R.sum);
  const [, ...totalCumulativeCosts] = R.scan(R.add, 0, totalCosts);
 
  return {
    months,
    costs1,
    costs2,
    costs3,
    totalCosts,
    totalCumulativeCosts
  };
}
