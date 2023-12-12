import {Routes, Route} from "react-router-dom"

import Signin from "./page/Signin";
import Signup from "./page/Signup";
import Resetpassword from "./page/Resetpassword";
import Dashboard from "./main-pages/Dashboard";
import Classroom from "./main-pages/Classroom";
import Marketplace from "./main-pages/Marketplace";
import Referral from "./main-pages/Referral";
import Withdrawal from "./main-pages/Withdrawal";
import Profile from "./main-pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="Signup" element={<Signup />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="Resetpassword" element={<Resetpassword />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Classroom" element={<Classroom />} />
      <Route path="Marketplace" element={<Marketplace />} />
      <Route path="Referral" element={<Referral />} />
      <Route path="Withdrawal" element={<Withdrawal />} />
      <Route path="Profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
