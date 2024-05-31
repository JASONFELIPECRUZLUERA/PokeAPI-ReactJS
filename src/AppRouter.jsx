import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import  {Navigation}  from './Components/Navigation.jsx'
import  {PokemonPage}  from './Pages/PokemonPage.jsx'
import {SearchPage} from './Pages/SearchPage.jsx'
import {HomePage} from './Pages/HomePage.jsx'

const AppRouter = () => {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<HomePage />} />
                    <Route path='pokemon/:id' element={<PokemonPage />} />
                    <Route path='search' element={<SearchPage />} />
                </Route>

                <Route path='*' element={<Navigate to='/' />} />

            </Routes>

        </div>
    )
}

export default AppRouter
