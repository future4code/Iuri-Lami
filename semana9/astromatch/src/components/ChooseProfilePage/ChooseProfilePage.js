import Axios from 'axios'
import React, { useEffect, useState } from  'react'
import ChooseButton from './ChooseButton'
import ProfileCard from './ProfileCard'
import axios from 'axios'

function ChooseProfilePage() {
    const [profileToChoose, setProfileToChoose] = useState({})

    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/iuri-lami/person').then(response => {
           setProfileToChoose(response.data.profile)
        })
    },[]);

    return(
        <div>
            <ProfileCard profile={profileToChoose}/>
            <ChooseButton/>
        </div>
    )

}

export default ChooseProfilePage