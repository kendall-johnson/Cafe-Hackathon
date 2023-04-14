import "./OrderList.css"
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders, showOrderDetail, handleClick   }) {
  return (
    <main className="OrderList">
      {orders.map((order) => (
        <OrderListItem key={order.id} order={order} handleClick={handleClick} showOrderDetail={showOrderDetail} />
      ))}
    </main>
  );
}