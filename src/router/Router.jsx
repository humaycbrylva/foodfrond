import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../companents/layout/Layout'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import Favori from '../pages/favori/Favori'
import Formik from '../pages/admin/Formik'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/favori' element={<Favori/>}/>
            <Route path='/formik' element={<Formik/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router