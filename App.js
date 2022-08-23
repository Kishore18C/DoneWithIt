import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice'
import AuthContext from './app/auth/context';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AppNavigator />
        {/* <WelcomeScreen/> */}
         {/* <LoginScreen/> */}
        {/* <RegisterScreen/> */}
      </NavigationContainer>
      </>
  );
}
