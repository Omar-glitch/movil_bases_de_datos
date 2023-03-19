import React from 'react'
import Colors from '../constants/Colors'
import { AntDesign, GText, GTouchOpacity, GView } from '../styles/GlobalStyles'
import { useNavigation } from '@react-navigation/native'

const { grey } = Colors;

const AppBar = ({ title }) => {
  const nav = useNavigation();

  const handleGoBack = () => {
    if (nav.canGoBack()) nav.goBack()
  }

  return (
    <GView fd='row' jc='center' h='52px' ai='center' mb='12px'>
      <GTouchOpacity onPress={handleGoBack} v='40px' jc='center' ai='center' a l='0'>
        <AntDesign n='arrowleft' s={24} c={grey} />
      </GTouchOpacity>
      <GText tc={grey} tfz='17px'>{ title }</GText>
    </GView>
  )
}

export default AppBar