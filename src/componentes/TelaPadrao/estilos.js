import { StyleSheet } from "react-native";
import { cores } from "../../estilos";

//estilização para o IOS
export default StyleSheet.create({
    ajusteTela: {
        flex: 1,
        backgroundColor: cores.roxo
    },
    ajusteTelaBaixo: {
        flex: 0,
        backgroundColor: cores.laranja
    }
});