import React from  'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
`   

function MatchListItem() {
    return(
        <ListItemContainer>
            <img src={'https://picsum.photos/21/21'}/>
            <p>Nome</p>
        </ListItemContainer>
    )

}

export default MatchListItem