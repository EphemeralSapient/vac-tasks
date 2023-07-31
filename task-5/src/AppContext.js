import React, { createContext, useState } from 'react';

// Create a new context
const AppContext = createContext();

// Create a provider component to wrap your app with
const AppProvider = ({ children }) => {
  // Define the initial state and any functions that will update the state
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    mobileNum: '',
    dob: '',
    addr: '',
  });

  // You can define other functions to update the state here

  // Provide the context value to the children components
  return <AppContext.Provider value={{ formData, setFormData }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
