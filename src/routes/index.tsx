import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// components
import { AuthRoutes } from './auth.routes'

export function Routes() {
    return(
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>       
    );
}