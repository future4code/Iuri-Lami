import Axios from 'axios'
import React, { useEffect, useState } from  'react'
import ChooseButton from './ChooseButton'
import ProfileCard from './ProfileCard'
import axios from 'axios'

function ChooseProfilePage() {
    const [profileToChoose, setProfileToChoose] = useState({})



    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/iuri-lami/person').then(response => {
           setProfileToChoose(response.data.profile)
        })
    }

    const chooseProfile = (choice) => {
        const body = {
            choice: choice,
            id: profileToChoose.id
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/iuri-lami/choose-person', body).then(response => {
            console.log(response)
            getProfileToChoose()
        })
    }


    useEffect(() => {
        getProfileToChoose()
    },[]);

    const onClickNo = () => {
        chooseProfile(false)
    }

    const onClickYes = () => {
        chooseProfile(true)
    }

    return(
        <div>
            <ProfileCard profile={profileToChoose}/>
            <ChooseButton onClickNo={onClickNo} onClickYes={onClickYes} />
        </div>
    )

}

export default ChooseProfilePage