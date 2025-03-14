/**
 * Item data for the budgeting page
 * 
 * This file defines the items that can be selected in the budgeting exercise,
 * as well as fake items used in the transaction detective page.
 */

// Regular items that can be selected in the budgeting exercise
// Items add up to 500 (credit limit) and are designed to make it easy to get to 30% of credit limit (150)
const items = [
  { name: "Netflix", cost: 15, image: "" },
  { name: "Groceries", cost: 90, image: "" },
  { name: "Taxi", cost: 75, image: "" },
  { name: "Clothes", cost: 45, image: "" },
  { name: "Cable TV", cost: 60, image: "" },
  { name: "Internet", cost: 70, image: "" },
  { name: "Lunches", cost: 75, image: "" },
  { name: "Gas", cost: 70, image: "" }
];

// Fake items used in the transaction detective page to represent fraudulent charges
const fakeItems = [
  { name: "Amazon.com - Drone", cost: 100, image: "" },
  { name: "iTunes Gift Card", cost: 100, image: "" }
];

// Create a lookup object for quick access to items by name
const itemLookup = {};
items.forEach(item => (itemLookup[item.name] = item));
fakeItems.forEach(item => (itemLookup[item.name] = item));

export { items, fakeItems, itemLookup };
