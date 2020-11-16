import React from  'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    dipslay: flex;
    justify-content: space-between;
`

function ChooseButton() {
    return(
        <ButtonContainer>
            <button>Não</button>
            <button>Sim</button>
        </ButtonContainer>
    )

}

export default ChooseButton