import Home from "./Home"
import {Route, Routes, BrowserRouter, useLocation} from "react-router-dom"
import Category from '../components/Category'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import {AnimatePresence} from 'framer-motion'

function Pages() {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key = {location.pathname}> 

        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/cuisines/:type" element = {<Cuisine/>}></Route>
        <Route path = "/searched/:search" element = {<Searched/>}></Route>
        <Route path = "/recipes/:id" element = {<Recipe/>}></Route>
        
        </Routes>
        </AnimatePresence>

    )
}
export default Pages