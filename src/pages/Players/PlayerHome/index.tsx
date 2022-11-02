import { Button } from '@components/Button';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { ListItem } from '@components/ListItem';
import { Title } from '@components/Title';
import { Separator } from '@global/styles/components';
import { User } from 'phosphor-react-native';
import React, { useState } from 'react';

import { TabButton } from '@components/TabButton';
import { useTheme } from 'styled-components/native';
import { Label } from '@components/Label';
import { FlatList } from 'react-native';
import { EmptyList } from '@components/EmptyList';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

export function PlayerHome() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [team, setTeam] = useState<'teamA' | 'teamB'>('teamA');
  const [players, setPlayers] = useState([0, 1]);

  function handleAddPersonOnTeam() {
    console.log('Add Person');
  }

  function handleRemovePersonOnTeam() {
    console.log('Remove Person');
  }

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function removeTeam() {
    console.log('Remove Team');
  }

  return (
    <>
      <S.Container>
        <Header onPress={() => handleNavigationGoBack()} />
        <S.Body>
          <Title title="Nome da Turma" subtitle="Adicione a galera e separe os times" />
          <Separator height={36} />
          <Input placeholder="Seu nome" onPress={() => handleAddPersonOnTeam()} />
          <Separator height={24} />
          <S.TabBarContainer>
            <S.TabBarInfo>
              <TabButton title="TIME A" active={team === 'teamA'} onPress={() => setTeam('teamA')} />
              <TabButton title="TIME B" active={team === 'teamB'} onPress={() => setTeam('teamB')} marginLeft={8} />
            </S.TabBarInfo>
            <Label title={String(players.length)} />
          </S.TabBarContainer>

          <Separator height={24} />
          <FlatList
            data={players}
            keyExtractor={item => String(item)}
            renderItem={() => <ListItem icon={User} iconSize={20} onPressIcon={() => handleRemovePersonOnTeam()} />}
            ItemSeparatorComponent={() => <Separator height={10} />}
            ListEmptyComponent={() => <EmptyList title={`Que tal cadastrar a \n primeira turma 😊`} />}
            contentContainerStyle={players.length === 0 && { flex: 1 }}
          />

          <Separator height={16} />
        </S.Body>
        <Footer>
          <Button title="Remover turma" background="red500" onPress={() => removeTeam()} />
        </Footer>
      </S.Container>
    </>
  );
}
