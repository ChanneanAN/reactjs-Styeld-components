import React from 'react'
import styled from 'styled-components'
const Navside = () => {
    return (
        <Container>
            <content>
            <ul>
                <li>Stock</li>
                <li>Sell</li>
                <li>Invoice</li>
                <li>Customer</li>
                <li>Exchange</li>
            </ul>
            </content>
            
        </Container>
    )
}

export default Navside;

const Container = styled.ul`
    background-color: red;
    width: 150px;
    height: 900px;
    color: white;
    text-align: center;
`
const li = styled.li `
    color: white;
    text-align: center;
`