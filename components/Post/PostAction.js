import React from 'react'
import { View, Image, Text } from 'react-native'
import styled from 'styled-components'

const ActionContainer = styled(View)`
  padding: 5px;
  display: flex;
  align-items: center;
`

export function PostAction(props) {
  return <ActionContainer>
    <Image src={props.icone} onClick={props.onClick}/>
    <Text>{props.numero}</Text>
  </ActionContainer>
}