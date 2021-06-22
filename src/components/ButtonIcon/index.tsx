// libraries
import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { 
    Image, 
    Text,
    View 
} from "react-native";

// js
import { styles } from "./styles";

// assets
import DiscordImg from '../../assets/discord.png';

interface Props extends RectButtonProps {
    title: string;

}

export function ButtonIcon(props: Props) {
    const { title, ...rest  } = props;

    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image 
                    source={DiscordImg}
                    style={styles.icon}
                />
            </View>

            <Text style={styles.title}>{title}</Text>
        </RectButton>
    );
}
