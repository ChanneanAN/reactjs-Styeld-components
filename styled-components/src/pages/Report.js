import React from 'react'
import Container from '../components/GlobalStyled'
import styled from 'styled-components'
const Report = () => {
    return (
        <Container>
            <Content>
                <h1>Report page</h1>
            </Content>
        </Container>
    )
}

export default Report;

const Content = styled.h1 `
    color: white;
`