import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, MainApp, Register, } from '../../pages'
import CreateBlog from '../../pages/CreateBlog'
import DetailBlog from '../../pages/DetailBlog'
// dom6 tdk support optional path dengan '?'
const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<MainApp />}>
                    <Route path='/' element={<Home />} />
                    <Route path='create-blog/'>
                        <Route path=':id' element={<CreateBlog />} />
                        <Route path='' element={<CreateBlog />} />
                    </Route>
                    <Route path='detail-blog/:id' element={<DetailBlog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routess