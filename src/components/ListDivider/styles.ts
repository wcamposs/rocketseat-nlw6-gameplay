import { StyleSheet } from 'react-native';

// js
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 1,
        marginTop: 2,
        backgroundColor: theme.colors.secondary40,
        marginVertical: 31,
        alignSelf: 'flex-end',
    },
});