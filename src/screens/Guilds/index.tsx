// libraries
import React from 'react';
import { FlatList, View } from 'react-native';

// js
import { styles } from './styles';

// components
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

interface Props {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Lendários 2',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '3',
      name: 'Lendários 2',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '4',
      name: 'Lendários 2',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '5',
      name: 'Lendários 2',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '6',
      name: 'Lendários 2',
      icon: 'image.png',
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
      />
    </View>
  );
}
