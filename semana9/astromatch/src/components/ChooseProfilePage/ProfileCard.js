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


function ProfileCard(props) {    
    return(
        <ProfileCardContainer>
            <ProfilePicture src={props.profile.photo}/>
            <ProfileInfo>
                <p>{props.profile.name}, {props.profile.age}</p>
                <p>{props.profile.bio}</p>
            </ProfileInfo>
        </ProfileCardContainer>
    )

}

export default ProfileCard