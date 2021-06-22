import { StyleSheet } from 'react-native';

// js
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 1,
        backgroundColor: theme.colors.secondary40,
        marginVertical: 21,
        alignSelf: 'flex-end',
    },
});