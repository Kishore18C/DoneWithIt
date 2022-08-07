import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import authStorage from './app/auth/storage'
import OfflineNotice from './app/components/OfflineNotice'
import AuthContext from './app/auth/context';

export default function App() {

  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    setUser(user)
  }

  if (!isReady) { <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} /> }

  return (
    <AuthContext.Provider value={{ user, setUser }} >
      <OfflineNotice />
      <NavigationContainer>
        {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
        <AppNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
