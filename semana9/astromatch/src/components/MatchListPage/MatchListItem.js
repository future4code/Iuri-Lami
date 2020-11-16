import React from  'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
`   
const Avatar = styled.img`
    height: 30px;
    width: 30px;
`

function MatchListItem(props) {
    return(
        <ListItemContainer>
            <Avatar src={props.profile.photo}/>
            <p>{props.profile.name}</p>
        </ListItemContainer>
    )

}

export default MatchListItem