import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { useCallback, useContext, useEffect, useState } from 'react';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen'
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import NotificationScreen from './screens/NotificationScreen';
import RepairScreen from './screens/RepairScreen';
import { UserProvider } from './context/UserContext';
import useAuthentication from './hooks/useAuthentication';

preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { user } = useAuthentication();

  useEffect(() => {
    setAppIsReady(user !== undefined);
  }, [user]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  if (!user) {
    return (
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator>
            <Stack.Screen name="Auth" options={{ headerShown: false }} component={AuthScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    )
  }

  return (
    <UserProvider user={user}>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator>
          <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name='User' options={{ headerShown: false }} component={UserScreen} />
          <Stack.Screen name='Notifications' options={{ headerShown: false }} component={NotificationScreen} />
          <Stack.Screen name='Repair' options={{ headerShown: false }} component={RepairScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
