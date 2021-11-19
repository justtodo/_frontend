
document.documentElement.className = document.documentElement.className.replace(
  "no-js",
  "js"
);

window.theme = window.theme || {};
theme.routes = {
  cart: "/cart",
  cartAdd: "/cart/add",
  cartChange: "/cart/change",
};
theme.strings = {
  addToCart: "Add to cart",
  soldOut: "Sold Out",
  unavailable: "Unavailable",
  stockLabel: "Only [count] items in stock!",
  willNotShipUntil: "Will not ship until [date]",
  willBeInStockAfter: "Will be in stock after [date]",
  waitingForStock: "Inventory on the way",
  savePrice: "Save [saved_amount]",
  cartEmpty: "Your cart is currently empty.",
  cartTermsConfirmation:
    "You must agree with the terms and conditions of sales to check out",
};
theme.settings = {
  dynamicVariantsEnable: true,
  dynamicVariantType: "button",
  cartType: "drawer",
  moneyFormat: "$ {{amount}}",
  saveType: "dollar",
  recentlyViewedEnabled: false,
  predictiveSearch: true,
  predictiveSearchType: "product,article,page",
  inventoryThreshold: 10,
  quickView: true,
  themeName: "Impulse",
  themeVersion: "3.1.0",
};