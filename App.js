import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Contects from './screens/Contacts'
import Direction from './screens/Direction';

import PedidosState from './context/pedidosState';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PedidosState >
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contacts" component={Contects} />
          <Stack.Screen name="Direction" component={Direction} />
        </Stack.Navigator>
      </NavigationContainer>
    </PedidosState>
  );
}