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
import { Orders } from '../containers/Admin/Orders';
import { NewProducts } from '../containers/Admin/NewProduct';
import { EditProduct } from '../containers/Admin/EditProduct';
import { Products } from '../containers/Admin/Products';

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

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/novo-produto" element={<NewProducts />} />
        <Route path="/admin/editar-produto" element={<EditProduct />} />
        <Route path="/admin/produtos" element={<Products />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
