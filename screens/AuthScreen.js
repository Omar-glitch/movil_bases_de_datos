import React, { useState } from 'react'
import { Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { GImgBg, GKeyAvoidView, GText, GTouchWithoutFeedback, GView, Octaicon, GInput, GSafeAreaView, GTouchOpacity, GImg } from '../styles/GlobalStyles'
import { Keyboard } from 'react-native'
import Colors, { ColorsRGB } from '../constants/Colors'
import useBottomNavStyle from '../hooks/useBottomNavStyle'
import EventEmitter from '../utils/EventEmitter'

const { primary, light, dark } = Colors;

const AuthScreen = () => {
  const [loggingIn, setLoggingIn] = useState(true);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  useBottomNavStyle('dark', light);

  const title = loggingIn ? 'Login' : 'Sign up';

  const handleLogin = () => {
    EventEmitter.notify('login', mail, password);
  }

  return (
    <GKeyAvoidView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} f='1'>
      <GTouchWithoutFeedback activeOpacity={1} f='1' onPress={Keyboard.dismiss}>
        <GImgBg f='1' source={require('../assets/auth_login.jpg')}>
          <GSafeAreaView f='1' jc='center' ai='center'>
            <StatusBar translucent style='light' animated />

            <GView a b='0' l='0' minh='360px' w='100%' bg={light} e='8' p='7% 9%' btlr='35px' btrr='35px'>
              <GView a t="20px" r="40px" w="40px" h="40px" br='50px' bg={primary} o='.25'/>
              <GView a b="40px" l="30px" w="25px" h="25px" br='50px' bg={primary} o='.25'/>
              <GView a r="10px" b="10px" w="60px" h="60px" br='50px' bg={primary} o='.25'/>

              <GText mr='auto' tfz='26px' tfw='900' tc={primary} mb='10px'>{title}</GText>

              <GView fd='row' mv='10px' ai='center' bg={ColorsRGB.primary(.08)} ph='15px' br='15px'>
                <Octaicon s='22' n="person" c={primary} />
                <GInput f='1' p='10px' tfz='16px' tc={primary} autoCapitalize='none' placeholder='Ingrese su nombre...' placeholderTextColor={ColorsRGB.primary(.6)} value={mail} onChangeText={setMail} />
              </GView>

              <GView fd='row' mv='10px' ai='center' bg={ColorsRGB.primary(.08)} ph='15px' br='15px'>
                <Octaicon s="22" n='lock' c={primary} />
                <GInput f='1' p='10px' tfz='16px' tc={primary} autoCapitalize='none' placeholder='Ingrese su contraseña...' placeholderTextColor={ColorsRGB.primary(.6)} secureTextEntry value={password} onChangeText={setPassword} />
              </GView>

              <GView ai='center' mb='10px'>
                <GTouchOpacity w='70%' maxw='150px' p='10px' br='25px' mt='10px' activeOpacity={.8} bg={primary} onPress={handleLogin} >
                  <GText tta='center' tc={light} tfz='16px' tfw='500'>{title}</GText>
                </GTouchOpacity>
              </GView>

              <GView fd='row' jc='center' mt='auto'>
                <GText tc={dark}>
                  {loggingIn ? '¿Nuevo en RAPID DATA? ' : '¿Ya tienes una cuenta? '}
                </GText>
                <GText tc={primary} ttdl='underline' tfw='900' onPress={() => setLoggingIn(!loggingIn)}>
                  {loggingIn ? 'Sign Up' : 'LogIn'}
                </GText>
              </GView>
            </GView>
          </GSafeAreaView>
          <GImg a t='20px' l='16px' w='120px' h='80px' source={require('../assets/logo.png')} />
        </GImgBg>
      </GTouchWithoutFeedback>
    </GKeyAvoidView>
  )
}

export default AuthScreen
