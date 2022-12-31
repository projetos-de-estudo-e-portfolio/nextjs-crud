import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div>
      { id ? (
        <Entrada 
          somenteLeitura
          texto="Código:" 
          valor={id}
          className="mb-4"
        />
      ) : false }
      <Entrada 
        texto="Nome:" 
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      />
      <Entrada 
        texto="Idade:" 
        tipo="number" 
        valor={idade}
        valorMudou={setIdade}
        />
        <div className="flex justify-end mt-7">
          <Botao cor="blue" className="bg-current from-blue-400 to-blue-700 mr-2">
            {id ? 'Alterar' : 'Salvar'}
          </Botao>
          <Botao cor="gray" className="bg-current from-gray-400 to-gray-700">
            Cancelar
          </Botao>
        </div>
    </div>
  )
}