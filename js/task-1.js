function makeTransaction(droidsCount, droidPrice, userCredits) {
  const totalPrice = droidsCount * droidPrice;
  if (totalPrice > userCredits) {
    return 'Insufficient funds!';
  }
  return `You ordered ${droidsCount} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));
