import React from "react";

//componente de navegação
//para navegação foi utilizado uma biblioteca e baixado suas dependências para o expo e o guide que vai ser usado, no caso "Tab Navigation" - https://reactnavigation.org/docs/getting-started
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//importa as telas da navegação
import Servicos from "./telas/Servicos";
import Carrinho from "./telas/Carrinho";

import { cores } from "./estilos";

//criação da tabBart
const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator 
            screenOptions={{
                tabBarIcon: ({ focused = false, color, size }) => { },
                tabBarActiveTintColor: cores.roxo,
                tabBarInactiveTintColor: cores.claro,
                tabBarActiveBackgroundColor: cores.roxo,
                tabBarInactiveBackgroundColor: cores.laranja,
                style: {
                    height: 70,
                },
                tabBarLabelStyle: {
                    width: '100%', 
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 25,
                    marginTop: 3,
                    paddingVertical: 11,
                    backgroundColor: cores.laranja
                },
                tabBarHideOnKeyboard: true //esconde o menu quando o teclado estiver ativos
            }}
        >
            <Tab.Screen name="Serviços" component={Servicos} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}