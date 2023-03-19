import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import Colors from '../constants/Colors'

const { primary } = Colors;

const Gradient = ({ color1 = primary, color2 = '#768AC7' }) => {
  return (
    <LinearGradient 
      colors={[color1, color2]}
      start={{x: 0, y: 1}} end={{x: 1, y: 0}}
      style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}
    />
  )
}

export default Gradient