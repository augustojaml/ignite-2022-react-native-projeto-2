import { AppError } from '@global/errors/AppError';
import LOCAL_STORAGE from '@react-native-async-storage/async-storage';
import { PlayersStorage } from '../players';

export const groupsStorage = {
  key: '@ignite-team:group',
  create: async (groupName: string) => {
    try {
      const storage = await groupsStorage.getGroups();

      const groupAlreadyExists = storage.includes(groupName);

      if (groupAlreadyExists) {
        throw new AppError('Group already exists');
      }

      await LOCAL_STORAGE.setItem(groupsStorage.key, JSON.stringify([...storage, groupName]));
    } catch (error) {
      throw error;
    }
  },
  getGroups: async () => {
    try {
      const storage = await LOCAL_STORAGE.getItem(groupsStorage.key);
      const groups: string[] = storage ? JSON.parse(storage) : [];
      return groups;
    } catch (error) {
      throw error;
    }
  },
  removeGroupByName: async (groupName: string) => {
    const storageGroups = await groupsStorage.getGroups();
    const filteredGroup = storageGroups.filter(group => group !== groupName);
    await LOCAL_STORAGE.setItem(groupsStorage.key, JSON.stringify(filteredGroup));
    await LOCAL_STORAGE.removeItem(`${PlayersStorage.key}-${groupName}`);
  },
};
