import Axios from 'axios'
import React from  'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    dipslay: flex;
    justify-content: space-between;
`

function ChooseButton(props) {

    return(
        <ButtonContainer>
            <button onClick={props.onClickNo}>Não</button>
            <button onClick={props.onClickYes}>Sim</button>
        </ButtonContainer>
    )

}

export default ChooseButton