function getShippingCost(country) {
  const deliveryCountries = {
    China: 100,
    Chile: 250,
    Australia: 170,
    Jamaica: 120,
  };
  if (deliveryCountries[country]) {
    return `Shipping to ${country} will cost ${deliveryCountries[country]} credits`;
  }
  return 'Sorry, there is no delivery to your country';
}
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
