import './order-details.css'

export default function OrderDetails() {
  return (
    <div className='order-details'>
      <h3>Your order</h3>
      <hr />

      <table className='order-table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Subtotal</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
