import React from "react";
import { FlatList } from "react-native";

//SafeAreaView - safe area do IOS, especificamente para IOS
//StatusBar - safe area para android
//KeyboardAvoidingView - usado para controlar o teclado, faz o teclado "subir", de acordo com cada dispostivos

import Item from './Item';

const servicos = [
    {
      id: 1,
      nome: "Banho",
      preco: 79.9,
      descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos."
    },
    {
      id: 2,
      nome: "Vacina V4",
      preco: 89.9,
      descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
      id: 3,
      nome: "Vacina Antirrábica",
      preco: 99.9,
      descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano."
    }
];

export default function Servicos() {
    return <>
      <FlatList
        data={servicos}
        renderItem={({item}) => <Item {...item}  />}
        keyExtractor={({id}) => String(id)}
      />
    </>
}