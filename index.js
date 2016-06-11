export function cumulative(costsObject) {
  const months = Object.keys(costsObject).sort();
  const costs = months.map(month => costsObject[month]);
 
  const getCostsByCategory = category => costs.map(item => item[category]);
  const costs1 = getCostsByCategory('costs1');
  const costs2 = getCostsByCategory('costs2');
  const costs3 = getCostsByCategory('costs3');
 
  const totalCosts = costs1.map((val, i) => val + costs2[i] + costs3[i]);
  const totalCumulativeCosts = [];
  let cumulative = 0;
  for (const costs of totalCosts) {
    cumulative += costs;
    totalCumulativeCosts.push(cumulative);
  };
 
  return {
    months,
    costs1,
    costs2,
    costs3,
    totalCosts,
    totalCumulativeCosts
  };
}
