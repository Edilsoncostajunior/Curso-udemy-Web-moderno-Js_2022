import React from 'react'
import ReactDOM from 'react-dom'

//import BomDia from './componentes/BomDia'
//import Multi, { BoaNoite} from './componentes/Multiplos'
//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho ,{ Filhos } from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome='Silva'>
            <Filho.Filhos nome="Pedro" > </Filho.Filhos>
            <Filhos nome="Paulo" > </Filhos>
            <Filhos nome="Carla" > </Filhos>
        </Pai >
    </div>
    , document.getElementById('root'))