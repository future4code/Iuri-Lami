import React from  'react'
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage'
import styled from 'styled-components'

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items: center;
    padding: 0px;
`

function AppBar() {
    return(
        <AppBarContainer>
            <button>Escolher</button>
            <p>Astromatch</p>
            <button>Lista</button>
        </AppBarContainer>
    )

}

export default AppBar