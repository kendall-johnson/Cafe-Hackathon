import "./OrderList.css"
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders  }) {
  return (
    <main>
      {/* {items} */}
      {orders.map((order) => (
        <OrderListItem key={order.id} order={order} />
      ))}
      <h1>ORDERS HERE</h1>
    </main>
  );
}