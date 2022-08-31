import styled from 'styled-components'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import { Navigate, NavigationType, useNavigate } from 'react-router'

function Search() {

    const navigate = useNavigate();
    const [input, setInput] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
        console.log('searched') 
    }

    return (
        <FormStyle onSubmit = {submitHandler}>
            <div> 
            <FaSearch/>
            <input onChange = {(e) => setInput(e.target.value)} type="text"/>
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
margin:0rem 20rem;
position:relative;
width:100%;
input {
    border:none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color:white;
    padding: 1rem 3rem;
    border:none;
    border-radius:1rem;
    outline:none;
    width:400px;
    height:20px;
    margin-top:2rem;
}
svg {
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%, 50%);
    color:white
}
`
export default Search