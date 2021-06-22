// libraries
import React from "react";
import { Text, View } from 'react-native';

// js
import { styles } from "./styles";

// components
import { Avatar } from "../Avatar";

export function Profile() {
    return(
        <View style={styles.container}>

            <Avatar urlImage='https://github.com/wcamposs.png' />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Olá,</Text>
                    <Text style={styles.username}>Willian</Text>
                </View>

                <Text style={styles.message}>Hoje é dia de vitória</Text>
            </View>

        </View>
    );
}