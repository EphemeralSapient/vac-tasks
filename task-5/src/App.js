import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import VotingListForm from './valid';
import StatusPage from './StatusPage';
import { AppProvider } from './AppContext'; // Import the AppProvider

const App = () => {
  return (
    <Router>
      <AppProvider>
      <Routes>
        <Route path="/" element={<VotingListForm/>} />
        <Route path="/status" element={<StatusPage />} /> 
      </Routes>
    </AppProvider>
    </Router>
  );
};

export default App;
