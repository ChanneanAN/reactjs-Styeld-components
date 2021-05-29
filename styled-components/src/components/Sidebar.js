import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "../App.css"
import  { 
    AiFillHome, AiFillFile ,AiFillFilter

}from "react-icons/ai";
const Sidebar = () => {
    return (
        <Container>
            <h3> Menu</h3>
                <ListMenu>

                <Link className="test"  to = "/Home">
                    <li  > <AiFillHome/> Home </li>
                </Link>
                <Link className="test" to = "Report">
                    <li> <AiFillFile/> Report</li>
                </Link>
                <Link className="test" to = "/Stock">
                    <li><AiFillFilter/> Stock</li>
                </Link>
                <Link className="test" to = "/Stock">
                    <li><AiFillFilter/> Stock</li>
                </Link>
                <Link className="test" to = "/Stock">
                    <li><AiFillFilter/> Stock</li>
                </Link>
                <Link className="test" to = "/Stock">
                    <li><AiFillFilter/> Stock</li>
                </Link>
                
                </ListMenu>

        </Container>
    )
}

export default Sidebar

const Container = styled.div `
    justify-content: flex-end;
    position: fixed;
    width: 180px;
    height: 850px;
    top:0;
    left: 0;
    bottom: 0;
    background: #9e9e9e;
    padding-top: 50px;
    h3{
    padding: 10px 20px;
    color: #fff;
    font-family: "Rubik";
    letter-spacing: 2px;
    font-weight: 400;
    margin: 0;
    font-size: 25px;
    text-transform: uppercase;
    text-align: center;
    }
      
`
const ListMenu = styled(Link)`
    text-decoration: none;
    text-align: center;
 
    li {  
    justify-content: flex-end;
    margin: 10px;
    padding: 10px;
    color: white;
    font-family: "Rubik";
    font-size: 20px;
    letter-spacing: 2px;
    list-style-type: none;
   
    &:hover{
    border-bottom: 5px solid white;
    color: #3b648d;
    margin-left: 20px;
    transition: 0.4s;
  }
  &:hover:not(.active) {
    background-color: #3b648d;
    color: white;
  }
    }
`