//step 1: creating a drink

const createDrink = (type) => {
  const menu = { latte: 45, espresso: 30, cappuccino: 50 };
  return { type, price: menu[type] };
};

//step 2: prepare order

const prepareOrder = (drink) => {
  console.log(`Preparing ${drink.type} to the kitchen`);
  return Math.floor(Math.random() * 1000);
};

// step 3: payment
const processPayment = (ticketNumber, amount) => {
  if (!ticketNumber) throw new Error("No ticket number provided");
};
console.log(`Payment of ${amount}SEK  received for ticket #${ticketNumber}`);
return true;
