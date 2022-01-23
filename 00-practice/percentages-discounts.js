function calculatePriceWithDiscount(price, discount) {
  const percentageToPay = 100 - discount;
  const priceWithDiscount = (price * percentageToPay) / 100;

  return priceWithDiscount;
}