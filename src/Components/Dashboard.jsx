import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    // Clear user session (e.g., remove token from local storage)
    console.log('User  logged out');
    // Redirect to sign in
  };

   

  return (
    <div>
      
      <h1>Log out</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;