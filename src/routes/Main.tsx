import { GroupsList } from '@pages/Groups/GroupsList';
import { GroupsNew } from '@pages/Groups/GroupsNew';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import { PlayerHome } from '../pages/Players/PlayerHome';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      GroupsList: undefined;
      GroupsNew: undefined;
      PlayerHome: undefined;
    }
  }
}

const GLOBAL_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

const MainStack = createStackNavigator();

export function Main() {
  return (
    <MainStack.Navigator initialRouteName="GroupsList">
      <MainStack.Group screenOptions={GLOBAL_OPTIONS}>
        <MainStack.Screen name="GroupsList" component={GroupsList} />
        <MainStack.Screen name="GroupsNew" component={GroupsNew} />
        <MainStack.Screen name="PlayerHome" component={PlayerHome} />
      </MainStack.Group>
    </MainStack.Navigator>
  );
}
