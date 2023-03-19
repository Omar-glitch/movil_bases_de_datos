import React from 'react'
import Colors from '../constants/Colors'
import { GText, GTouchOpacity, GView } from '../styles/GlobalStyles';
import Gradient from './Gradient';
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native';

const { light, dark } = Colors;

const ProgressList = ({ list }) => {
  const nav = useNavigation();

  return (
    <GView f='1' w='100%' h='auto'>
      <FlatList 
        data={list}
        keyExtractor={(_, index) => index}
        renderItem={({ item, index }) => {
          const first = index === 0;

          return (
            <GView w='130px' h='144px' of='hidden' bg={first ? 'transparent' : light} br='12px'>
              {index === 0 && <Gradient />}
              <GTouchOpacity onPress={() => nav.navigate('Repair', { item })} w='100%' h='100%' p='10%' jc='center'>
                <GText tc={first ? light : dark} tfz='18px'>{item.Tipo_Mantenimiento}</GText>
                <GText tc={first ? light : dark} tfz='15px'>{item.Estado}</GText>
              </GTouchOpacity>
            </GView>
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <GView w='8px' />}
      />
    </GView>
  )
}

export default ProgressList