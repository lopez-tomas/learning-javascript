const coupons = [
  {
    name: 'summer2022',
    discount: 15,
  },
  {
    name: 'tkd2022',
    discount: 30,
  },
  {
    name: 'ltomasdev',
    discount: 25,
  },
];

function getPrice() {
  return parseFloat(document.getElementById('price').value);
}

function getDiscount() {
  return parseFloat(document.getElementById('discount').value);
}

function getCoupon() {
  resultCoupon.innerText = "";
  return document.getElementById('coupon').value;
}

function priceWithDiscount(price, discount) {
  const percentageToPay = 100 - discount;
  const priceWithDiscount = (price * percentageToPay) / 100;

  return priceWithDiscount;
}

function isCouponValid(coupon) {
  return coupons.find(e => e.name === coupon.toLowerCase());
}

let resultPrice = document.getElementById('resultPrice');

function calculatePriceWithDiscount() {
  const price = getPrice();
  let discount = getDiscount();
  const couponToEvaluate = getCoupon().replace(/\s+/g, "");

  if (couponToEvaluate !== "") {
    const coupon = isCouponValid(couponToEvaluate);

    if (coupon != undefined) {
      discount += coupon.discount;
      resultCoupon.innerText = `"${coupon.name}" (-${coupon.discount}%) coupon applied!`;
    } else {
      resultCoupon.innerText = `"${couponToEvaluate}" is not a valid coupon.`;
    }
  }

  const newPrice = priceWithDiscount(price, discount);
  resultPrice.innerText = `$ ${price} (-${discount}%) = $ ${newPrice}`;
}