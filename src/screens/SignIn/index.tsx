// libraries
import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import * as AuthSession from 'expo-auth-session';

// js
import { styles } from './styles';

// assets
import IllustrationImg from '../../assets/illustration.png';

// components
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

// context
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  // const navigation = useNavigation();
  const { user, signIn } = useAuth();

  async function handleSignIn() {
    // navigation.navigate('Home');
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            {`Conecte-se ${'\n'} e organize suas ${'\n'}jogatinas`}
          </Text>

          <Text style={styles.subtitle}>
            {`Crie grupos para jogar seus games ${'\n'}favoritos com seus amigos`}
          </Text>

          <ButtonIcon title='Entrar com Discord' onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
