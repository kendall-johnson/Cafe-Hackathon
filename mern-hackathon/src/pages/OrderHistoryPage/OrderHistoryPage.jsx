import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage({ user, setUser }) {
  const[orders, setOrders] = useState([])
  const [showOrderDetail, setShowOrderDetail] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null);

  function handleClick(clickedOrder) {
    setShowOrderDetail(true)
    setSelectedOrder(clickedOrder)
  }

  useEffect(function() {
    async function fetchOrders() {
    const orders = await ordersAPI.getOrders();
    setOrders(orders);
    }
    fetchOrders()
  }, [])

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList orders={orders} handleClick={handleClick} showOrderDetail={showOrderDetail}/>
      {showOrderDetail && <OrderDetail order={selectedOrder}/>}
    </main>
  );
}