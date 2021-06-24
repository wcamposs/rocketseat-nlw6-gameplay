// libraries
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

// js
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

// assets
import BannerImg from '../../assets/banner.png';

// components
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Willian',
      avatar_url: 'https://github.com/wcamposs.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Willian 2',
      avatar_url: 'https://github.com/wcamposs.png',
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto name='share' size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title='Jogadores' subtitle='Total 3' />

      <FlatList
        keyExtractor={(item) => item.id}
        data={members}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title='Entrar na partida' />
      </View>
    </Background>
  );
}
