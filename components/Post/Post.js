import React from "react";
import { View, Image } from 'react-native'
import { PostHeader } from "./PostHeader";
import { PostFooter } from "./PostFooter";
import styled from "styled-components";

const PostContainer = styled(View)`
  border: 1px solid gray;
  margin: 5px;
`;

const PostImage = styled(Image)`
  width: 100%;
  height: 200px;
`;

export function Post(props) {
  const post = props.post;

  const novaFuncao = () => {
    props.curtirPost(post.id)
  }
  
  return (
    <PostContainer>
      <PostHeader
        fotoUsuario={post.urlFotoUsuario}
        nomeUsuario={post.nomeUsuario}
      />
      <PostImage source={{ uri: post.urlImagem }} />
      <PostFooter
        numeroCurtidas={post.numeroCurtidas}
        curtidoPorMim={post.curtidoPorMim}
        numeroComentarios={post.comentarios.length}
        curtirPost={novaFuncao}
      />
    </PostContainer>
  );
}
