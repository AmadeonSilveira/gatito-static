import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import estilos from "./estilos";
import CampoInteiro from "../../../componentes/CampoInteiro";
import Botao from "../../../componentes/Botao";

export default function Item({nome, preco, descricao}) {
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(0);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    }

    const inverterExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }

    return <>
        <TouchableOpacity style={estilos.informacao} onPress={inverterExpandir}>
            <Text style={estilos.nome}>{ nome }</Text>
            <Text style={estilos.descricao}>{ descricao }</Text>
            <Text style={estilos.preco}>{
                //formata a moeda em real utilizando a biblioteca INTL
                Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
            }</Text>
        </TouchableOpacity>
        {/* abre e fecha a aba */}
        {expandir && <View style={estilos.carrinho}>
            <View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal}/>
                </View>
                <View style={estilos.valor}>
                    <Text style={estilos.quantidade}>Total:</Text>
                    <Text style={estilos.preco}>{
                        //formata a moeda em real utilizando a biblioteca INTL
                        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)
                    }</Text>
                </View>
            </View>
            <Botao valor="Adicionar ao carrinho" acao={() => {}}/>
        </View> }
        <View style={estilos.divisor} /> 
    </>
}