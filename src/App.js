import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navbar";
import Authentication from "./routes/authentication/Auth";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout.js/Checkout";
import { setCurrentUser } from "./store/user/user.action";


import {  useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils'





function App() {

const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
