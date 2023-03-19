import React from 'react'
import { GText, GView, MaterialIcon } from '../styles/GlobalStyles'
import Colors from '../constants/Colors'
import { FlatList } from 'react-native';

const { light, dark, gray, grey } = Colors;

const NotificationList = ({ list }) => {
  return (
    <GView bg={light} br='20px' w='100%' f='1' of='hidden'>
      <FlatList 
        data={list}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => (
          <GView w='100%' h='80px' p='2% 8%' bg={light} ai='center' jc='space-between' fd='row'>
            <GView>
              <GText tc={dark} tfz='16px'>{item.Tipo_Mantenimiento}</GText>
              <GText tc={dark} tfz='14px'>{item.Estado}</GText>
            </GView>
            <MaterialIcon n='check-box' s='24' c={grey} />
          </GView>
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <GView h='2px' w='100%' ai='center'>
          <GView w='75%' h='2px' bg={gray}></GView>
        </GView>}
      />
    </GView>
  )
}

export default NotificationList