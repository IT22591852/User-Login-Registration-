import React from "react";
import { Route, Routes } from "react-router";

import UserRegister from "./Components/User/UserManagement/UserRegister/Register";
import UserLogin from "./Components/User/UserManagement/UserLogin/Login";
import UserProfiel from "./Components/User/UserManagement/UserProfile/UserProfiel";
import UserUpdateAccount from "./Components/User/UserManagement/UpdateAccount/UpdateAccount";



function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/afetrhome" element={<UserRegister />} />
          <Route path="/" element={<UserRegister />} />
          {/*User Management*/}
          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/userprofile" element={<UserProfiel />} />
          <Route path="/updateaccount/:id" element={<UserUpdateAccount />} />

        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
