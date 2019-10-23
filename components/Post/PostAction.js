import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
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
    <TouchableOpacity onPress={props.onClick}>
      <ImageContainer source={props.icone} />
    </TouchableOpacity>
    <Text>{props.numero}</Text>
  </ActionContainer>
}