import React, { useState } from 'react';
import { BiSearch } from "react-icons/bi";


function App() {
  const menuItems = [
    { name: "Biryani", price: 250 },
    { name: "Pizza", price: 300 },
    { name: "Burger", price: 150 },
    { name: "Butter Naan", price: 100 },
    { name: "Paneer", price: 60 },
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleItemClick = (itemName, itemPrice) => {
    setSelectedItems((prevItems) => [...prevItems, { name: itemName, price: itemPrice }]);
  };

  const handleOrderSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <header className='header'>
        <h2>Restaurant</h2>
        <div className='search-icon-container'>
          <BiSearch className='icon' />
        </div>
      </header>
      <div className="menu">
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            name={menuItem.name}
            price={menuItem.price}
            onItemClick={handleItemClick}
            isSubmitted={isSubmitted}
          />
        ))}
      </div>
      <div className="submit-section">
        <button onClick={handleOrderSubmit}>Submit Order</button>
      </div>
      {isSubmitted && (
        <div className="order">
          <h3>Your Orders:</h3>
          {selectedItems.map((item, index) => (
            <div key={index}>{item.name} - {item.price}</div>
          ))}
        </div>
      )}
    </div>
  );
}

function MenuItem({ name, price, onItemClick, isSubmitted }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onItemClick(name, price);
  };

  return (
    <div className="menu-item">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={isSubmitted} // Disable checkboxes after the order is submitted
        />
        {name} - {price}
      </label>
    </div>
  );
}

export default App;
