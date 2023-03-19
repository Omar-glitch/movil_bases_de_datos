import { StatusBar as SB } from 'react-native'
import React from 'react'
import AppBar from '../components/AppBar'
import { SafeAreaView } from 'react-native';
import { GImg, GText, GView } from '../styles/GlobalStyles';
import Colors from '../constants/Colors';
import CircularProgress from '../components/CircularProgress';
import { Dimensions } from 'react-native';
import Item from '../components/Item';
import urls from '../constants/urls';
import { ScrollView } from 'react-native';

const { gray, primary, grey } = Colors;

const RepairScreen = (props) => {
  const { item } = props.route.params;
  const { width } = Dimensions.get('screen')


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GView pt={`${SB.currentHeight}px`} bg={gray} h='100%' ph='5%'>
        <AppBar title='Reparación' />

        <GView ai='center' jc='center' f='1'>
          <GView v={`${width / 2.2}px`} br='20px' of='hidden' mb='16px'>
            <GImg source={{uri: `${urls.SERVER_URL}\\${item.FotoRuta}`}} v='100%' obj='cover' />
          </GView>

          <ScrollView style={{width: '100%', marginBottom: 16, flex: 1}} showsVerticalScrollIndicator={false}>
            <Item title='Tipo de mantenimiento' description={item.Tipo_Mantenimiento} icon='car-rental' />
            <Item title='Descripción del servicio' description={item.Descripcion_Servicio} icon='description' />
            <Item title='Color' description={item.Color} icon='color-lens' />
            <Item title='Empleado encargado' description={`${item.Nombre} ${item.Apellido}`} icon='person' />
            <Item title='Teléfono de empleado' description={item.Telefono} icon='local-phone' />
            <Item title='Estado' description={item.Estado} icon='access-time' />
            <Item title='Fecha de entrada' description={item.Fecha_Ingreso} icon='date-range' />
            <Item title='Fecha estimada de salida' description={item.Fecha_Salida} icon='date-range' />
            <Item title='Fecha próximo mantenimiento' description={item.Proximo_Mantenimiento} icon='date-range' />
            <Item title='Placa' description={item.Placa} icon='crop-square' />
            <Item title='Marca' description={item.Marca} icon='bookmark' />
            <Item title='Modelo' description={item.Modelo} icon='model-training' />
          </ScrollView>
        </GView>
      </GView>
    </SafeAreaView>
  )
}

export default RepairScreen
