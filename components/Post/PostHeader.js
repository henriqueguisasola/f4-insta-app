import React from 'react'
import { View, Image, Text } from 'react-native'
import styled from 'styled-components'

const HeaderContainer = styled(View)`
  padding-left: 5px;
  display: flex;
  align-items: center;
  height: 40px;
`

const UserPicture = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
`

export function PostHeader(props) {
  return <HeaderContainer>
    <UserPicture src={props.fotoUsuario}/>
    <Text>{props.nomeUsuario}</Text>
  </HeaderContainer>
}