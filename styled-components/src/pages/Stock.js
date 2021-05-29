import React from 'react'
import Container from '../components/GlobalStyled'
import styled from 'styled-components'
const Stock = () => {
    return (
        <Container>
            <Content>
                <h1>Stock</h1>
            </Content>
        </Container>
    )
}

export default Stock

const Content = styled.div `

h1{
    color: white;
    justify-content: space-around;
}
button{
    color: red;
}
`