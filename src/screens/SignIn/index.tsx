// libraries
import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// js
import { styles } from "./styles";

// assets
import IllustrationImg from "../../assets/illustration.png";

// components
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            {`Conecte-se ${"\n"} e organize suas ${"\n"}jogatinas`}
          </Text>

          <Text style={styles.subtitle}>
            {`Crie grupos para jogar seus games ${"\n"}favoritos com seus amigos`}
          </Text>

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
