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

function isCouponValid(coupon) {
  return coupons.find(e => e.name === coupon.toLowerCase());
}

function priceWithDiscount(price, discount) {
  const percentageToPay = 100 - discount;
  const priceWithDiscount = (price * percentageToPay) / 100;

  return priceWithDiscount;
}

let resultCoupon = document.getElementById('resultCoupon');
let resultPrice = document.getElementById('resultPrice');

function couponMessage(isValid, coupon, discount) {
  resultCoupon.style.display = "block";

  if (!isValid) {
    resultCoupon.classList.add("invalid");
    resultCoupon.classList.remove("valid");
    resultCoupon.innerText = `"${coupon}" is not a valid coupon.`;
  } else {
    resultCoupon.classList.add("valid");
    resultCoupon.classList.remove("invalid");
    resultCoupon.innerText = `"${coupon}" (-${discount}%) coupon applied!`;
  }
}

function calculatePriceWithDiscount() {
  const price = getPrice();
  let discount = getDiscount();
  const couponToEvaluate = getCoupon().replace(/\s+/g, "");

  if (couponToEvaluate !== "") {
    const coupon = isCouponValid(couponToEvaluate);

    if (coupon != undefined) {
      discount += coupon.discount;
      couponMessage(true, coupon.name, coupon.discount);
    } else {
      couponMessage(false, couponToEvaluate, discount);
    }
  }

  const newPrice = priceWithDiscount(price, discount);
  resultPrice.innerText = `$ ${price} (-${discount}%) = $ ${newPrice}`;
}