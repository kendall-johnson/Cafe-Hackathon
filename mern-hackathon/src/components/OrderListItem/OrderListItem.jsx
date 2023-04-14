import React from 'react'
import './OrderListItem.css'

export default function OrderListItem({order}) {
  return (
    <div>
        <p>{order.name}</p>
        <p>{order.emoji}</p>
        <p>{order.category}</p>
        <p>{order.price}</p>
    </div>
  )
}
