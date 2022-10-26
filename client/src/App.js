import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';

function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path="/" element={<HomeView />} />
          {/* <Route path="about" element={<AboutView userCount={users.length} />} />
          <Route path="users" element={<UsersView users={users} />} />
          <Route path="users/:id" element={<UserProfileView users={users} />} />
          <Route path="add-user" element={<AddUserView addUserCb={name => addUser(name)} />} />
          <Route path="*" element={<Error404View />} /> */}
      </Routes>
      


    </div>
  );
}

export default App;
