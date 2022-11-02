import { AppError } from '@global/errors/AppError';
import LOCAL_STORAGE from '@react-native-async-storage/async-storage';
import { PlayerStorageProps } from './props';

export const PlayersStorage = {
  key: '@ignite-team:player',
  create: async (newPlayer: PlayerStorageProps, groupName: string) => {
    try {
      const storagePlayers = await PlayersStorage.findByGroup(groupName);
      const playerAlreadyExist = storagePlayers.filter(player => player.name === newPlayer.name);

      if (playerAlreadyExist.length > 0) {
        throw new AppError('Player already exists');
      }

      await LOCAL_STORAGE.setItem(`PlayersStorage.key-${groupName}`, JSON.stringify([...storagePlayers, newPlayer]));
    } catch (error) {
      throw error;
    }
  },
  findByGroup: async (groupName: string) => {
    try {
      const storage = await LOCAL_STORAGE.getItem(`PlayersStorage.key-${groupName}`);
      const players: PlayerStorageProps[] = storage ? JSON.parse(storage) : [];
      return players;
    } catch (error) {
      throw error;
    }
  },
  findByGroupAndTeam: async (groupName: string, team: string) => {
    try {
      const storage = await PlayersStorage.findByGroup(groupName);
      const players = storage.filter(player => player.team === team);
      return players;
    } catch (error) {
      throw error;
    }
  },
  deleteByGroup: async (playerName: string, groupName: string) => {
    try {
      const storage = await PlayersStorage.findByGroup(groupName);
      const filteredPlayer = storage.filter(player => player.name !== playerName);
      await LOCAL_STORAGE.setItem(`PlayersStorage.key-${groupName}`, JSON.stringify(filteredPlayer));
    } catch (error) {
      throw error;
    }
  },
};
