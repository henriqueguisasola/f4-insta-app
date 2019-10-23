import React, { Component } from 'react';
import { SafeAreaView } from 'react-native'
import Constants from 'expo-constants';
import {InstaContainer} from './components/InstaContainer/InstaContainer'

const listaDePosts = [{
  id: 1,
  urlImagem: 'https://picsum.photos/300/200',
  urlFotoUsuario: 'https://picsum.photos/100/100',
  nomeUsuario: 'future4.br',
  curtidoPorMim: false,
  numeroCurtidas: 0,
  comentarios: [
    {
      texto: 'Que foto incrivel!',
    },
    {
      texto: 'Muito daora!!!',
    },
  ]
},
{
  id: 2,
  urlImagem: 'https://picsum.photos/300/201',
  urlFotoUsuario: 'https://picsum.photos/100/101',
  nomeUsuario: 'future4',
  curtidoPorMim: true,
  numeroCurtidas: 5,
  comentarios: [
    {
      texto: 'Que foto incrivel!',
    },
    {
      texto: 'Muito daora!!!',
    },
    {
      texto: 'Muito daora!!!',
    },
  ]
}]

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
      }}>
        <InstaContainer listaDePosts={listaDePosts}/>
      </SafeAreaView>
    );
  }
}
