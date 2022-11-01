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
import * as S from './styles';

export function Home() {
  const theme = useTheme();
  const [team, setTeam] = useState<'teamA' | 'teamB'>('teamA');

  function handleAddPersonOnTeam() {
    // console.log('Testando');
  }

  return (
    <>
      <S.Container>
        <Header onPress={() => handleAddPersonOnTeam()} />
        <S.Body>
          <Title title="Nome da Turma" subtitle="Adicione a galera e separe os times" />
          <Separator height={36} />
          <Input onPress={() => handleAddPersonOnTeam()} />
          <Separator height={24} />
          <S.TabBarContainer>
            <S.TabBarInfo>
              <TabButton title="TIME A" active={team === 'teamA'} onPress={() => setTeam('teamA')} />
              <TabButton title="TIME B" active={team === 'teamB'} onPress={() => setTeam('teamB')} marginLeft={8} />
            </S.TabBarInfo>
            <Label title="2" />
          </S.TabBarContainer>

          <Separator height={24} />
          <FlatList
            data={[0, 1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={item => String(item)}
            renderItem={() => <ListItem icon={User} iconSize={20} />}
            ItemSeparatorComponent={() => <Separator height={10} />}
          />

          <Separator height={16} />
        </S.Body>
        <Footer>
          <Button title="Remover turma" background="red500" />
        </Footer>
      </S.Container>
    </>
  );
}
