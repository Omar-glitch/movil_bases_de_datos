import React from 'react'
import { ColorsRGB } from '../constants/Colors'
import { GText, GView, MaterialIcon } from '../styles/GlobalStyles'

const Item = ({ title, description, icon }) => {
  return (
    <GView m='8px 0' ai='center' bg={ColorsRGB.dark(.08)} p='8px' br='8px' fd='row'>
      <MaterialIcon s={18} n={icon} c='black' />
      <GView ml='12px' w='auto' mr='24px'>
        <GText tfz='16px'>{title}:</GText>
        <GText tfz='15px'>{description}</GText>
      </GView>
    </GView>
  )
}

export default Item