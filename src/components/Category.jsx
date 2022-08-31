import {FaPizzaSlice, FaHamburger, FaPrescriptionBottle, FaFeather} from 'react-icons/fa'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function Category() {
    return (
        <List>
            <SLink to = {"/cuisines/Italian"}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>
            <SLink to = {"/cuisines/American"}>
                <FaHamburger/>
                <h4>American</h4>
            </SLink>
            <SLink to = {"/cuisines/Thai"}>
                <FaFeather/>
                <h4>Thai</h4>
            </SLink>
            <SLink to = {"/cuisines/Japanese"}>
                <FaPrescriptionBottle/>
                <h4>Japanese</h4>
            </SLink>
        </List>
    )
}
const List = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:center;
margin:2rem 0;
text-align:center;
`
const SLink = styled(NavLink)`
color:white;
display:flex;
flex-direction:column;
justify-content:center;
padding-top:1rem;
box-sizing:border-box;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor:pointer;
transform:scale(0.8);

h4 {
    color:white;
    font-size:0.8rem;
}
svg {
    font-size:1.5rem
}
&.active {
    background: linear-gradient(to right, #00ac96, #373737)
    
}
`
export default Category