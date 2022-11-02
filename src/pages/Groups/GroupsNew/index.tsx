import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Title } from '@components/Title';
import { AppError } from '@global/errors/AppError';
import { groupsStorage } from '@global/storage/groups';
import { Separator } from '@global/styles/components';
import { useNavigation } from '@react-navigation/native';
import { UsersThree } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Alert, AlertStatic } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Body, Container } from './styles';

export function GroupsNew() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState('');

  async function handleNavigationToPlayers(): Promise<void | AlertStatic> {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert('New Group', 'Group name cannot be null');
      }
      await groupsStorage.create(groupName);
      setGroupName('');
      return navigation.navigate('PlayerHome', { groupName });
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Error', error.message);
      }
      // eslint-disable-next-line no-console
      console.log(error);
      return Alert.alert('Error', 'There was an error creating group');
    }
  }

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  return (
    <>
      <Container>
        <Header onPress={() => handleNavigationGoBack()} />
        <Body>
          <Separator height={84} />
          <UsersThree size={56} color={theme.colors.green500} />
          <Separator height={16} />
          <Title title="Nossa Turma" subtitle="Crie uma turma para adicionar pessoas" />
          <Separator height={32} />
          <Input placeholder="Nome da turma" value={groupName} onChangeText={setGroupName} />
          <Separator height={20} />
          <Button title="Criar" onPress={() => handleNavigationToPlayers()} />
        </Body>
      </Container>
    </>
  );
}
