import React, { useState, useEffect } from 'react';

// Custom fetch function with base URL set to localhost:5000
const customFetch = (url, options = {}) => {
  const baseURL = 'http://localhost:5000'; // Change to your backend URL
  return fetch(`${baseURL}${url}`, options);
};

const App = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [userType, setUserType] = useState('retail manager');

  useEffect(() => {
    // Fetch the items when the component mounts
    fetchItems();
  }, []);

  const fetchItems = () => {
    customFetch('/api/items')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  };

  const addItem = () => {
    customFetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: itemName }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setItems([...items, data]);
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });
  };

  const deleteItem = (id) => {
    customFetch(`/api/items/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok \n ' + response.text.toString());
        }
      })
      .then(() => {
        setItems(items.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    <div>
      <h1>Item List</h1>
      <div>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        {userType === 'retail manager' && (
          <button onClick={addItem}>Add Item</button>
        )}
      </div>
      <div>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="consumer">Consumer</option>
          <option value="retail manager">Retail Manager</option>
        </select>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            {userType === 'retail manager' && (
              <button onClick={() => deleteItem(item._id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
