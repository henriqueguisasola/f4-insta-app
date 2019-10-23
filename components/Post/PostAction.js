import React from 'react'
import { View, Image, Text } from 'react-native'
import styled from 'styled-components'

const ActionContainer = styled(View)`
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
`
const ImageContainer = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`

export function PostAction(props) {
  return <ActionContainer>
    <ImageContainer source={props.icone} onClick={props.onClick}/>
    <Text>{props.numero}</Text>
  </ActionContainer>
}