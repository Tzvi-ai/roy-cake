import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { myContext } from '../App'
import TableRow from '../components/TableRow'
const ShoppingCart = () => {
const { products, deleteProduct, addOne} = useContext(myContext);

// חישוב סה"כ לתשלום
const totalPrice = products.reduce((acc, item) => acc + (Number(item.price) * item.count), 0);

 return (
    <div className="cart-page">
      <Header title="Shopping Cart" />
      <main className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        {products.length === 0 ? <p style={{textAlign: 'center', fontSize: '1.2rem'}}>Your cart is empty</p> : (
        <>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Count</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <TableRow
                key={index}
                name={item.name}
                price={item.price}
                count={item.count}
                id={item.id}                addOne={addOne}
                onDelete={() => deleteProduct(item.id)} // העברת פונקציה
              />
            ))}
          </tbody>
        </table>
        <div style={{textAlign: 'right', padding: '20px', fontSize: '1.5rem', fontWeight: 'bold'}}>
            Total: {totalPrice} ₪
        </div>
        </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default ShoppingCart