import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Title } from '@components/Title';
import { Separator, Text } from '@global/styles/components';
import { useNavigation } from '@react-navigation/native';
import { UsersThree } from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

import { Body, Container } from './styles';

export function GroupsNew() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNavigationToPlayers() {
    navigation.navigate('PlayerHome');
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
          <Input placeholder="Nome da turma" />
          <Separator height={20} />
          <Button title="Criar" onPress={() => handleNavigationToPlayers()} />
        </Body>
      </Container>
    </>
  );
}
