import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import { Home } from '../pages/Players/Home';

const GLOBAL_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

const MainStack = createStackNavigator();

export function Main() {
  return (
    <MainStack.Navigator>
      <MainStack.Group screenOptions={GLOBAL_OPTIONS}>
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Group>
    </MainStack.Navigator>
  );
}
