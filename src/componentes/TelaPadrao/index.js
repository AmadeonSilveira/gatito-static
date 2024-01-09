import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";

//SafeAreaView - safe area do IOS, especificamente para IOS
//StatusBar - safe area para android
//KeyboardAvoidingView - usado para controlar o teclado, faz o teclado "subir", de acordo com cada dispostivos - Utilizando o componente KeyboardAvoidingView ao redor da nossa tela podemos criar esse ajuste automático para que o teclado não cubra nenhuma parte. O código ainda tem uma diferenciação para android e ios

import estilosGlobal, { cores } from "../../estilos";
import estilos from "./estilos";

export default function TelaPadrao({ children }) {
    return <>
        <SafeAreaView style={estilos.ajusteTela}> 
            <StatusBar backgroundColor={cores.roxo}/> 
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "heigth"} //identifica o tipo de dispositivo, os valores precisam estar em "" duplas
                style={estilosGlobal.preencher} //para preencher a tela toda
            > 
                { children }
            </KeyboardAvoidingView>
        </SafeAreaView> 
        <SafeAreaView style={estilos.ajusteTelaBaixo}></SafeAreaView>
    </> 
}