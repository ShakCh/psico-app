import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Psico from '../screens/Psico';


const Stack = createNativeStackNavigator();

export default function PsicosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="pisco" component={Psico} options={{ title: "Psicologos" }} />
        </Stack.Navigator>
    );
}
