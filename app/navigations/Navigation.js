import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PsicosStack from './PsicoStack';
import FavoriteStack from './FavoriteStack';


import TopPsico from '../screens/TopPsico';
import Search from '../screens/Search';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="psico" component={PsicosStack} options={{ title: "Piscologos" }} />

                <Tab.Screen name="favorite" component={FavoriteStack} options={{ title: "Favoritos" }} />
                <Tab.Screen name="top-psico" component={TopPsico} options={{ title: "Top" }} />
                <Tab.Screen name="search" component={Search} options={{ title: "Buscar" }} />
                <Tab.Screen name="account" component={Account} options={{ title: "Cuenta" }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}