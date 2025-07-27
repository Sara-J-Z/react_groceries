import React from 'react';

function GroceryList() {
  const groceries = [
    {
      item: 'Milk',
      brand: 'Nada',
      units: 'liter',
      quantity: 2,
      isPurchased: false,
    },
    {
      item: 'Eggs',
      brand: 'GPC',
      units: 'dozen',
      quantity: 1,
      isPurchased: true,
    },
    {
      item: 'Apples',
      brand: 'Tessa',
      units: 'kg',
      quantity: 4,
      isPurchased: false,
    },
  ];

  return (
    <div className="grocery-list">
      <h1>Grocery Bag</h1>
      <ul>
        {groceries
          .filter((grocery) => !grocery.isPurchased)
          .map(({ item, quantity, units }, index) => (
            <li key={index}>
              {quantity} {units} of {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default GroceryList;
