import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) { 
    console.log(`seleciona cliente ${cliente.nome}`)
   }
  function clienteExcluido(cliente: Cliente) {
    console.log(`exclui cliente ${cliente.nome}`)
   }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo={"Cadastro Simples"}>
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4 bg-current from-green-400 to-green-700">Novo Cliente</Botao>
        </div>
        <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido} 
        />
        <Formulario cliente={clientes[2]}></Formulario>
      </Layout>
    </div>
  )
}
