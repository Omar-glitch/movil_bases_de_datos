import { StatusBar as SB } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Colors from '../constants/Colors'
import useBottomNavStyle from '../hooks/useBottomNavStyle'
import { Entypo, GText, GView, GTouchOpacity } from '../styles/GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import ProgressList from '../components/ProgressList'
import NotificationList from '../components/NotificationList'
import Gradient from '../components/Gradient'
import CircularProgress from '../components/CircularProgress'
import urls from '../constants/urls'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const { primary, gray, dark, grey, light } = Colors;
const { SERVER_URL } = urls;

const HomeScreen = () => {
  useBottomNavStyle('dark', gray);
  const nav = useNavigation();
  const { id, Nombre } = useContext(UserContext);
  const [maintenances, setMaintenances] = useState([])
  const [maintenancesFinished, setMaintenancesFinished] = useState([])

  // console.log(maintenances)

  useEffect(() => {
    const separateFinishedItems = (items) => {
      return items.filter(item => (new Date().getTime() > Date.parse(item.Fecha_Salida)))
    }

    axios.get(`${SERVER_URL}/app/mantenimientos/${id}`)
      .then(data => {
        const m = data.data.data;
        setMaintenances(m);
        setMaintenancesFinished(separateFinishedItems(m));
      })
      .catch(console.log)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar translucent style='dark' animated />

      <GView pt={`${SB.currentHeight}px`} bg={gray} h='100%' ph='5%'>
        <GView mv='16px' fd='row' jc='space-between' ai='center'>
          <GView w='60%'>
            <GText tc={grey} tfz='18px' mv='4px' ellipsizeMode='tail' numberOfLines={1}>Bienvenido, {Nombre}</GText>
            <GText tc={dark} tfz='25px'>Tus reparaciones</GText>
          </GView>
          <GView fd='row'>
            <GTouchOpacity onPress={() => nav.navigate('Notifications', {'maintenances' : maintenancesFinished})} mr='6px' v='42px' jc='center' ai='center' bg={light} br='16px'>
              {maintenancesFinished.length > 0 &&
                <GView bg={dark} a t='-10px' r='0' br='20px' jc='center' ai='center' v='20px'>
                  <GText tc={light}>{maintenancesFinished.length > 9 ? '+9' : maintenancesFinished.length}</GText>
                </GView>
              }
              <Entypo n='bell' c={dark} s={24} />
            </GTouchOpacity>
            <GTouchOpacity onPress={() => nav.navigate('User')} v='42px' jc='center' ai='center' bg={light} br='16px'>
              <Entypo n='user' c={dark} s={24} />
            </GTouchOpacity>
          </GView>
        </GView>

        <GView w='100%' h='140px' br='20px' of='hidden' fd='row' ai='center' mv='12px'>
          <Gradient />
          <GView mh='16px'>
            <CircularProgress size={100} color={light} fontSize={24} barWidth={15} value={75} />
          </GView>
          <GView f='1'>
            <GText tfz='22px' tc={light} mb='4px'>Registro semanal</GText>
            <GText tfz='15px' tc={light} >{new Date().toLocaleString('es-US')}</GText>
          </GView>
        </GView>

        <GView mt='16px' h='auto' f='1'>
          <GView fd='row' jc='space-between' ai='center' mb='16px'>
            <GText tc={dark} tfz='22px'>En progreso</GText>
            <Entypo n='dots-three-horizontal' c={primary} s={28} />
          </GView>

          <ProgressList list={maintenances} />
        </GView>

        <GView mb='16px' f='1' h='auto'>
          <GView fd='row' jc='space-between' ai='center' mb='16px'>
            <GText tc={dark} tfz='22px'>Terminados</GText>
            <Entypo n='dots-three-horizontal' c={primary} s={28} />
          </GView>
          
          <NotificationList list={maintenancesFinished} />
        </GView>
      </GView>
    </SafeAreaView>
  )
}

export default HomeScreen