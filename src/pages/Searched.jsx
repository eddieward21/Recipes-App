import Category from '../components/Category'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

function Searched() {
    let params = useParams();
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    const getSearched = async(name) => {

        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f3efdde55b03448e90877100a472c158&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)

    }
    useEffect(() => {
        getSearched(params.search);
    }, [params.search])

    return (
    <Grid>
        {searchedRecipes.map((item) => {
            return (
            <Card key = {item.id}>
                <Link to = {"/recipes/" + item.id}>
                <img src = {item.image}/>
                <h4>{item.title}</h4>
                </Link>
            </Card>
            )
        })}
    </Grid>
    )
}

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);
gap:4rem;
width:100%;
background-color:white;
margin-top: 2rem;
`
const Card = styled.div`
img {
    width:100%;
    border-radius:2rem;
}
a {
    text-decoration:none;
}
h4 {
    text-align: center;
    padding: 1rem;
}
`
export default Searched
