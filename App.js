import React from "react";

//configura a moeda local como reais
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import TelaPadrao from "./src/componentes/TelaPadrao"
import Rotas from "./src/Rotas";


export default function App() {
  return <TelaPadrao>
      <Rotas />
  </TelaPadrao>  
}