import { Button } from '@components/Button';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { ListItem } from '@components/ListItem';
import { Title } from '@components/Title';
import { Separator } from '@global/styles/components';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components/native';

import { Body, Container } from './styles';

export function GroupsList() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNavigationToNewGroup() {
    navigation.navigate('GroupsNew');
  }

  function handleNavigationToPlayers() {
    navigation.navigate('PlayerHome');
  }

  return (
    <>
      <Container>
        <Header />
        <Body>
          <Title title="Nome da Turma" subtitle="Adicione a galera e separe os times" />
          <Separator height={36} />
          <ListItem
            height={82}
            iconSize={32}
            iconColor={theme.colors.green500}
            title="Nome da Turma"
            titleSize="xp"
            onPress={() => handleNavigationToPlayers()}
          />
        </Body>
        <Footer>
          <Button title="Criar nova turma" onPress={() => handleNavigationToNewGroup()} />
        </Footer>
      </Container>
    </>
  );
}
