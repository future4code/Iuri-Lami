import Axios from 'axios'
import React from  'react'
import axios from 'axios'

function ResetButton() {
    const onClickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/iuri-lami/clear').then(response => {
            console.log(response)
        })
    }
    return(
        <div><button onClick={onClickReset}>Resetar Curtidas e Matchs</button></div>
    )

}

export default ResetButton