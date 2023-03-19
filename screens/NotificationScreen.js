import { StatusBar as SB } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { GView } from '../styles/GlobalStyles'
import Colors from '../constants/Colors'
import NotificationList from '../components/NotificationList'
import AppBar from '../components/AppBar'

const { gray } = Colors;

const NotificationScreen = ({ route }) => {
  const { maintenances } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GView pt={`${SB.currentHeight}px`} bg={gray} h='100%' ph='5%'>
        <AppBar title='Tus notificaciones' />
        <NotificationList list={maintenances} />
      </GView>
    </SafeAreaView>
  )
}

export default NotificationScreen
