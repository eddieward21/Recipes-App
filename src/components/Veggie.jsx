import {useEffect, useState} from 'react'
import styled from "styled-components"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom'


function Veggie() {

    const [veggie, setVeggie] = useState([]);


    useEffect(() => {
        getVeggie()
    } ,[])

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie')

        if(check) {
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=f3efdde55b03448e90877100a472c158&number=9&tags=vegetarian`)
            const data = await api.json()
            console.log(data)
            setVeggie(data.recipes)
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
        }


    }   


    return <div>
        <Wrapper>
            <h3>Vegetarian Picks</h3>
            <Splide options = {{
                perPage: 3,
                gap:'5rem'
            }}>
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key = {recipe.id}>
                            <Card>
                                <Link to = {"/recipes/"+recipe.id}> 
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt="" />
                                </Link>
                            </Card>
                            <Gradient/>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    </div>
}
const Wrapper = styled.div`
    margin:4rem 0rem;
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
width:300px;
border-radius: 8px;
img {
    position:absolute;
    object-fit:cover;
    border-radius: 20px;
    height:100%;
    width:100%;
}
p {
    z-index:10;
    color:white;
    position:absolute;
    left:60%;
    bottom:0%;
    transform:translate(-50%, -50%);
    font-weight:bold;
    width:100%;

}
`;

export default Veggie