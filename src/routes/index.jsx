import { Route, Routes } from 'react-router-dom';

import {
  Home,
  Cart,
  Login,
  Menu,
  Register,
  Checkout,
  CompletePayment,
  Admin,
} from '../containers';
import { UserLayout } from '../layouts/UserLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompletePayment />} />
        <Route path="/pedidos" element={<Admin />} />
      </Route>

      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/home" element={<Admin />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
