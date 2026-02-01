import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import cakesArr from '../data/cakes.json'
import { myContext } from '../App'

const Gallery = () => {

  const {addProducts} = useContext(myContext)

  
  return (
    <div >
      <Header title="Our Products" />
      <main className='mainGallery'>
        {
          cakesArr.map((item,index)=>{
            return <Card key={index} name={item.name} pic={item.pic} price={item.price} calories={item.calories} ingredients={item.ingredients} func ={()=>addProducts({...item, id: item.id || index, count: 1})} />
          })
        }
      </main>
      <Footer />
    </div>
  )
}
export default Gallery
