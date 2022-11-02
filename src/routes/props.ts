import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';

export interface GroupsNewProps {
  groupName: string;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      GroupsList: undefined;
      GroupsNew: undefined;
      PlayerHome: GroupsNewProps;
    }
  }
}

const GLOBAL_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

const MainStack = createStackNavigator();

export { GLOBAL_OPTIONS, MainStack };
