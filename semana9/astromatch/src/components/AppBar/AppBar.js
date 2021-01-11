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

function AppBar(props) {
    return(
        <AppBarContainer>
            <button onClick={props.goToChooseProfilePage}>Escolher</button>
            <p>Astromatch</p>
            <button onClick={props.goToMatchListPage}>Lista</button>
        </AppBarContainer>
    )

}

export default AppBar