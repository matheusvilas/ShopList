// @flow
import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  text: String
}

export default function Lista({ text }: Props) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}
