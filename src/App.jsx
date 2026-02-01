import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'

import { createContext, useState, useEffect } from 'react'
import ShoppingCart from './pages/ShoppingCart'

import Conect from './pages/Conect'
export const myContext = createContext();
function App() {
  // טעינת העגלה מה-LocalStorage בעת טעינת האתר
  const [products , setProducts] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  })



  // שמירת העגלה בכל פעם שהיא משתנה
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  const addProducts = (product) =>{
    const exist = products.find((x) => x.id === product.id);
    if (exist) {
      setProducts(products.map((x) => x.id === product.id ? { ...exist, count: exist.count + 1 } : x));
    } else {
      setProducts([...products, product]);
    }
  }
  const deleteProduct = (id) => {
    setProducts(products.filter(item => item.id !== id));
  }

  const addOne = (id,h) => {
    setProducts(products.map((item)=> {
      if (item.id !== id){
        return item
      }
      return {...item, count: Number(h) }
    }
    ));
  }
  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={{addProducts,deleteProduct, addOne,products}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shoppingCart" element={<ShoppingCart/>} />
            <Route path="/connect" element={<Conect/>} />
          </Routes>
        </myContext.Provider>
      </BrowserRouter>
    </>
  )
}
export default App
