import { SafeAreaView, StatusBar as SB } from 'react-native'
import React, { useContext } from 'react'
import EventEmitter from '../utils/EventEmitter'
import { GImg, GText, GTouchOpacity, GView } from '../styles/GlobalStyles'
import AppBar from '../components/AppBar'
import Gradient from '../components/Gradient'
import Colors from '../constants/Colors'
import { UserContext } from '../context/UserContext'
import Item from '../components/Item'

const { gray, light } = Colors;

const UserScreen = () => {
  const user = useContext(UserContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GView pt={`${SB.currentHeight}px`} bg={gray} h='100%' ph='5%'>
        <AppBar title='Tu cuenta' />
        
        <GView ai='center' f='1'>
          <GImg v='150px' obf='contain' source={{uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}} />

          <GView w='100%' mt='16px'>
            <Item title='Identificador' description={user.id} icon='vpn-key' />
            <Item title='Nombre' description={user.Nombre} icon='person' />
            <Item title='Dirección' description={user.Direccion} icon='directions' />
            <Item title='Teléfono' description={user.Telefono} icon='phone-android' />
            <Item title='Fecha nacimiento' description={user.fecha} icon='date-range' />
          </GView>

          <GTouchOpacity onPress={() => EventEmitter.notify('logout')} w='100%' mb='16px' mt='auto' br='16px' of='hidden'>
            <Gradient color1='red' color2='tomato' />
            <GView p='10px 18px'>
              <GText tc={light} tfz='16px' tta='center'>Cerrar sesión</GText>
            </GView>
          </GTouchOpacity>
        </GView>
      </GView>
    </SafeAreaView>
  )
}

export default UserScreen
