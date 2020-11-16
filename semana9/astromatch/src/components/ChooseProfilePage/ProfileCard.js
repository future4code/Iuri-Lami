import React from  'react'
import styled from 'styled-components'

const ProfileCardContainer = styled.div`
    margin: 16px;
    border: 1px solid black;
`
const ProfileInfo = styled.div`
    padding: 0px 16px;
`

const ProfilePicture = styled.img`
    width: 100%;
    display: block;
`


function ProfileCard() {
    return(
        <ProfileCardContainer>
            <ProfilePicture src={'https://picsum.photos/300/300'}/>
            <ProfileInfo>
                <p>Nome, Idade</p>
                <p>Descrição</p>
            </ProfileInfo>
        </ProfileCardContainer>
    )

}

export default ProfileCard