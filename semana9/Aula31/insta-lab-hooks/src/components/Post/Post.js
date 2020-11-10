import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [numeroCurtidas, setNumeroCustidas] = useState(0)
  const [curtido,setCurtido] = useState(false)  
  const [numeroComentarios, setnumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])
  const [comentando, setComentando] = useState(0)


  const onClickCurtida = (event) => {
    setCurtido (event.target.value)
  };

  const onClickCurtida = () => {
    setNumeroCustidas (...)
  };

  const onClickComentario = (event) => {
    setComentando(event.target.value)
  };

  const enviarComentario = (comentario) => {
    const 
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          // icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post