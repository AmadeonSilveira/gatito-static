import React from "react";
import { TextInput } from "react-native";

import estilosPadrao from "./estilos";

export default function CampoInteiro({valor, acao}) {
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/); //se não for um número de 0 à 9 digitado, não altera o valor, expressão regular
        if(!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2'); //deixa só o que está depois do zero        

        acaoRetorno(removeZeroEsquerda);
    }
    const numeroString = String(valor);

    return <TextInput 
        style={[estilosPadrao.campo]}
        keyboardType="number-pad" //permite somente números 
        selectTextOnFocus //sobrescreve o primeiro texto
        onChangeText={(novoValor) => { atualiza(novoValor, acao)} }
        value={numeroString}
    />
}