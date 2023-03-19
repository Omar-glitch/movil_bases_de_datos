import { useEffect } from 'react'
import { setBackgroundColorAsync, setButtonStyleAsync, setPositionAsync } from 'expo-navigation-bar'
// import { useNavigation } from '@react-navigation/native'

const useBottomNavStyle = (color, background, position = 'relative') => {
  // const nav = useNavigation();

  useEffect(() => {
    const setNavStyles = () => {
      setBackgroundColorAsync(background);
      setButtonStyleAsync(color);
      setPositionAsync(position)
    }

    setNavStyles()
  }, [])

  return { color, background }
}

export default useBottomNavStyle