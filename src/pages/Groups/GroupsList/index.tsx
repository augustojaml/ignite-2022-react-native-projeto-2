import { Button } from '@components/Button';
import { EmptyList } from '@components/EmptyList';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { ListItem } from '@components/ListItem';
import { Loading } from '@components/Loading';
import { Title } from '@components/Title';
import { groupsStorage } from '@global/storage/groups';
import { Separator } from '@global/styles/components';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Body, Container } from './styles';

export function GroupsList() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [groups, setGroups] = useState<string[]>([]);
  const [onLoadingGroup, setOnLoadingGroup] = useState(true);

  function handleNavigationToNewGroup() {
    navigation.navigate('GroupsNew');
  }

  function handleNavigationToPlayers(groupName: string) {
    navigation.navigate('PlayerHome', { groupName });
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setOnLoadingGroup(true);
          const storageGroups = await groupsStorage.getGroups();
          setGroups(storageGroups);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('ERROR: LOADING GROUP', error);
          Alert.alert('ERROR: LOADING GROUP', JSON.stringify(error));
        } finally {
          setOnLoadingGroup(false);
        }
      })();
    }, []),
  );

  return (
    <>
      <Container>
        <Header />
        <Body>
          <Title title="Nome da Turma" subtitle="Adicione a galera e separe os times" />
          <Separator height={36} />

          {onLoadingGroup ? (
            <Loading marginTop={-100} />
          ) : (
            <FlatList
              data={groups}
              keyExtractor={item => String(item)}
              renderItem={({ item }) => (
                <ListItem
                  height={82}
                  iconSize={32}
                  iconColor={theme.colors.green500}
                  title={item}
                  titleSize="xp"
                  onPress={() => handleNavigationToPlayers(item)}
                />
              )}
              ItemSeparatorComponent={() => <Separator height={10} />}
              ListEmptyComponent={() => <EmptyList title={`Que tal cadastrar a \n primeira turma 😊`} />}
              contentContainerStyle={groups.length === 0 && { flex: 1 }}
            />
          )}
        </Body>
        <Footer>
          <Button title="Criar nova turma" onPress={() => handleNavigationToNewGroup()} />
        </Footer>
      </Container>
    </>
  );
}
