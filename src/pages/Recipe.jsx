import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import styled from 'styled-components'

function Recipe () {
    let params = useParams();
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')
    const fetchDetails = async () => {
        let response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=f3efdde55b03448e90877100a472c158`)
        const data = await response.json()
        setDetails(data)
    }
    useEffect(() => {
        fetchDetails();
    }, [params.name])

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />

            </div>
            <Info>
                
            <Button className = {activeTab === "instructions" ? "active" : ""} onClick = {() => setActiveTab("instructions")}>Instructions</Button>

            <Button className = {activeTab === "ingredients" ? "active" : ""} onClick = {() => setActiveTab("ingredients")}>Ingredients</Button>
            {activeTab === "instructions" && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>

                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
            </div>
            )}

        {activeTab === "ingredients" && (

            <ul>
                {details.extendedIngredients.map((ingredient) => 
                    <li key = {ingredient.id}>{ingredient.original}</li>
                )}
            </ul>
        )}

            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
margin-top:4rem;
margin-bottom:5rem;
display:flex;
.active {
    background:linear-gradient(35deg, #474747, #313131);
    color:#00ac96
}
h2 {
    margin-bottom:2rem;
}
li {
    font-size:1.2rem;
    line-height:2.5rem;
}
ul {
    margin-top: 2rem;
}
`
const Button = styled.button`

cursor:pointer;
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right: 2rem;
font-weight:600

`
const Info = styled.div`
margin-left:10rem;

`
export default Recipe