import * as React from 'react'
// import { useHistory } from 'react-router-dom'
// import { Button } from '../components/button'
import {
    Link,
    useHistory,
 } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components/header'

const HeaderArea = styled.div`
    position: fixed;
    right: 0;
    top:  0;
    left: 0;
`
const Wrapper = styled.div`
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 3rem;
    padding: 0 1rem;
`

export const History: React.FC = () => {
    return (
        <>
        <HeaderArea>
            <Header title="History">
                <Link to="/editor">
                    Back to Editor
                </Link>
            </Header>
        </HeaderArea>
        <Wrapper>
            TODO: Show history
        </Wrapper>
        </>
    )
}