import React from 'react'
import './OrderListItem.css'
import { useState } from 'react'
import OrderDetail from '../OrderDetail/OrderDetail'

export default function OrderListItem({order, handleClick, showOrderDetail}) {

  return (
    <div className="OrderListItem" onClick={() => handleClick(order)}>
        <div>Order Id: {order.orderId}</div>
        <div>{new Date(order.createdAt).toLocaleDateString()}</div>
        <div className="align-rt">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div>{order.totalQty} items</div>
        </div>

    </div>
  )
}
