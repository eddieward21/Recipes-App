import {useEffect, useState} from 'react'
import styled from "styled-components"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom'

function Popular() {

    const [popular, setPopular] = useState([]);


    useEffect(() => {
        getPopular()
    } ,[])

    const getPopular = async () => {
        const check = localStorage.getItem('popular')

        if(check) {
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=f3efdde55b03448e90877100a472c158&number=9`)
            const data = await api.json()
            console.log(data)
            setPopular(data.recipes)
            localStorage.setItem("popular", JSON.stringify(data.recipes))
        }


    }   


    return <div>
        <Wrapper>
            <h3>Popular Items</h3>
            <Splide options = {{
                perPage: 4,
                gap:'5rem'
            }}>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key = {recipe.id}>
                            <Card>
                                <Link to = {"/recipes/"+recipe.id}> 
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt="" />
                                <Gradient/>
                                </Link>
                            </Card>

                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    </div>
}
const Wrapper = styled.div`
    margin:4rem 0rem;
    width:99%;

`

const Gradient = styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

const Card = styled.div`
position:relative;
height: 200px;
width:200px;
border-radius: 20px;
img {
    position:absolute;
    object-fit:cover;
    border-radius: 20px;
    height:100%;
    width:100%;
}
p {
    position:absolute;
    z-index:10;
    color:white;
    left:10px;
    bottom:10px;
    width:100%;
    text-align:center

}
`;

export default Popular