import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) { 
    console.log(`seleciona cliente ${cliente.nome}`)
    setCliente(cliente)
    setVisivel('form')
   }

  function clienteExcluido(cliente: Cliente) {
    console.log(`exclui cliente ${cliente.nome}`)
   }

   function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
   }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo={"Cadastro Simples"}>
        { visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao 
                cor="green" 
                className="mb-4 bg-current from-green-400 to-green-700"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExcluido} 
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}
