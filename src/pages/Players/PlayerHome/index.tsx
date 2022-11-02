/* eslint-disable no-console */
import { Button } from '@components/Button';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { ListItem } from '@components/ListItem';
import { Title } from '@components/Title';
import { Separator } from '@global/styles/components';
import { User } from 'phosphor-react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { EmptyList } from '@components/EmptyList';
import { Label } from '@components/Label';
import { TabButton } from '@components/TabButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GroupsNewProps } from '@routes/props';
import { Alert, AlertStatic, FlatList, Keyboard, TextInput } from 'react-native';
import { PlayersStorage } from '@global/storage/players';
import { AppError } from '@global/errors/AppError';
import { PlayerStorageProps } from '@global/storage/players/props';
import { groupsStorage } from '@global/storage/groups';
import { Loading } from '@components/Loading';
import * as S from './styles';

export function PlayerHome() {
  const navigation = useNavigation();
  const params = useRoute().params as GroupsNewProps;
  const playerInputRef = useRef<TextInput>(null);

  const [team, setTeam] = useState<'teamA' | 'teamB'>('teamA');
  const [players, setPlayers] = useState<PlayerStorageProps[]>([]);
  const [onLoadingPlayer, setOnLoadingPlayer] = useState(true);
  const [player, setPlayer] = useState('');

  async function handleAddPersonOnTeam(): Promise<void | AlertStatic | null> {
    try {
      if (player.trim().length === 0) {
        return Alert.alert('New Player', 'Player name cannot be null');
      }
      const newPlayer = {
        name: player,
        team,
      };

      await PlayersStorage.create(newPlayer, params.groupName);

      // setTeam('teamA');
      playerInputRef.current?.blur();
      Keyboard.dismiss();
      setPlayer('');
      return null;
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Error New Player', error.message);
      }
      // eslint-disable-next-line no-console
      console.log(error);
      return Alert.alert('Error New Player', 'There was an error creating player');
    }
  }

  const getPlayersByTeam = useCallback(async () => {
    try {
      setOnLoadingPlayer(true);
      const playersByTeam = await PlayersStorage.findByGroupAndTeam(params.groupName, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log('ERROR: LOADING PLAYER', error);
      Alert.alert('ERROR: LOADING PLAYER', JSON.stringify(error));
    } finally {
      setOnLoadingPlayer(false);
    }
  }, [params.groupName, team]);

  const handleRemovePersonOnTeam = useCallback(
    async (playName: string) => {
      try {
        await PlayersStorage.deleteByGroup(playName, params.groupName);
        await getPlayersByTeam();
      } catch (error) {
        console.log('ERROR: DELETE PLAYER', error);
        Alert.alert('ERROR: DELETE PLAYER', JSON.stringify(error));
      }
    },
    [getPlayersByTeam, params.groupName],
  );

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  async function removeGroup() {
    Alert.alert('Remover Group', 'Want to remove the group', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await groupsStorage.removeGroupByName(params.groupName);
            navigation.navigate('GroupsList');
          } catch (error) {
            console.log('ERROR: DELETE GROUP', error);
            Alert.alert('ERROR: DELETE GROUP', JSON.stringify(error));
          }
        },
      },
    ]);
  }

  useEffect(() => {
    (async () => {
      await getPlayersByTeam();
    })();
  }, [params.groupName, team, player, handleRemovePersonOnTeam, getPlayersByTeam]);

  return (
    <>
      <S.Container>
        <Header onPress={() => handleNavigationGoBack()} />
        <S.Body>
          <Title title={params.groupName} subtitle="Adicione a galera e separe os times" />
          <Separator height={36} />
          <Input
            inputRef={playerInputRef}
            placeholder="Seu nome"
            value={player}
            onChangeText={setPlayer}
            onPress={() => handleAddPersonOnTeam()}
            onSubmitEditing={() => handleAddPersonOnTeam()}
            returnKeyType="done"
          />
          <Separator height={24} />
          <S.TabBarContainer>
            <S.TabBarInfo>
              <TabButton title="TIME A" active={team === 'teamA'} onPress={() => setTeam('teamA')} />
              <TabButton title="TIME B" active={team === 'teamB'} onPress={() => setTeam('teamB')} marginLeft={8} />
            </S.TabBarInfo>
            <Label title={String(players.length)} />
          </S.TabBarContainer>

          <Separator height={24} />
          {onLoadingPlayer ? (
            <Loading marginTop={-100} />
          ) : (
            <FlatList
              data={players}
              keyExtractor={item => String(item.name)}
              renderItem={({ item }) => (
                <ListItem
                  icon={User}
                  title={item.name}
                  iconSize={20}
                  onPressIcon={() => handleRemovePersonOnTeam(item.name)}
                />
              )}
              ItemSeparatorComponent={() => <Separator height={10} />}
              ListEmptyComponent={() => <EmptyList title={`Que tal cadastrar a \n primeira turma 😊`} />}
              contentContainerStyle={[players.length === 0 && { flex: 1 }, { paddingBottom: 100 }]}
            />
          )}

          <Separator height={16} />
        </S.Body>
        <Footer>
          <Button title="Remover turma" background="red500" onPress={() => removeGroup()} />
        </Footer>
      </S.Container>
    </>
  );
}
