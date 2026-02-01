// import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import cakesArr from '../data/cakes.json'
// import { myContext } from '../App'

const Conect = () => {

//   const {addProducts} = useContext(myContext)

  
  return (
    <div >
      <Header title="Contact Us" />
      <main style={{ maxWidth: '600px', margin: '2rem auto', padding: '20px', textAlign: 'center' }}>
        <h2>Get in Touch</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '10px', fontSize: '1rem' }} required />
            <input type="email" placeholder="Your Email" style={{ padding: '10px', fontSize: '1rem' }} required />
            <textarea placeholder="Message" rows="5" style={{ padding: '10px', fontSize: '1rem' }} required></textarea>
            <button type="submit" className="add-to-cart-btn" style={{ width: '100%' }}>Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
export default Conect
