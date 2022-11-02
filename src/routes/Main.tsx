import { GroupsList } from '@pages/Groups/GroupsList';
import { GroupsNew } from '@pages/Groups/GroupsNew';
import { PlayerHome } from '../pages/Players/PlayerHome';
import { GLOBAL_OPTIONS, MainStack } from './props';

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
