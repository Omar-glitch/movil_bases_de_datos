import React from 'react'
import { Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

const CircularProgress = ({ color, value, size, barWidth, fontSize }) => {
  return (
    <AnimatedCircularProgress
      size={size}
      width={barWidth}
      delay={500}
      duration={1200}
      fill={value}
      rotation={0}
      lineCap='round'
      tintColor={color}
    >
      {(fill) => <Text style={{ fontSize, color }}>{parseInt(fill)}%</Text>}
    </AnimatedCircularProgress>
  )
}

export default CircularProgress