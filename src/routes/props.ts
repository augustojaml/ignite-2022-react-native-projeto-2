import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';

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

export { GLOBAL_OPTIONS, MainStack };
