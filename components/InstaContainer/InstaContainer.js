import React from "react";
import { View, FlatList } from 'react-native'
import { FormNovoPost } from "../FormNovoPost/FormNovoPost";
import { Post } from "../Post/Post";
import styled from "styled-components";

const MainContainer = styled(View)`
  flex: 1;
`;

export class InstaContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listaDePosts: props.listaDePosts
    }
  }

  adicionarPost = (novoPost) => {
    const copiaListaDePosts = [novoPost, ...this.state.listaDePosts]

    this.setState({listaDePosts: copiaListaDePosts})
  }

  curtirPost = (idPost) => {
    // Selecionando elementos e criando cópias dos mesmos
    const copiaListaPosts = [...this.state.listaDePosts]

    const posicaoPostParaCurtir = copiaListaPosts.findIndex((post) => {
      return idPost === post.id
    })

    const postParaCurtir = copiaListaPosts[posicaoPostParaCurtir]

    const copiaPostParaCurtir = {...postParaCurtir}

    // Alterando dados
    const curtidoPorMimAtual = copiaPostParaCurtir.curtidoPorMim
    copiaPostParaCurtir.curtidoPorMim = !curtidoPorMimAtual

    if(curtidoPorMimAtual) {
      copiaPostParaCurtir.numeroCurtidas -= 1;
    } else {
      copiaPostParaCurtir.numeroCurtidas += 1;
    }

    // Atualizando valores do estado
    copiaListaPosts[posicaoPostParaCurtir] = copiaPostParaCurtir;

    this.setState({listaDePosts: copiaListaPosts})
  }
  
  render() {
    return (
      <MainContainer>
        <FormNovoPost criarPost={this.adicionarPost}/>
        <FlatList
          data={this.state.listaDePosts}
          renderItem={({ item }) => <Post post={item} curtirPost={this.curtirPost} />}
          keyExtractor={item => item.id.toString()}
        />
      </MainContainer>
    );
  }
}
