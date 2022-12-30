import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function renderizarCabecalho() {
    return (
      <tr className="flex">
        <th className="p-2 grow w-1/3">Código</th>
        <th className="p-2 grow w-1/3">Nome</th>
        <th className="p-2 grow w-1/3">Idade</th>
        { exibirAcoes ? <th className="p-2 grow w-1/3">Ações</th> : false }
        </tr>
    )
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, indice) => {
      return (
        <tr 
          key={cliente.id}
          className={`
            flex
            ${indice % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
          `}
        >
          <td className="p-2 grow w-1/3 text-center">{cliente.id}</td>
          <td className="p-2 grow w-1/3 text-center">{cliente.nome}</td>
          <td className="p-2 grow w-1/3 text-center">{cliente.idade}</td>
          { exibirAcoes ? renderizarAcoes(cliente) : false }
        </tr>
      )
    })
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center p2 grow w-1/3">
        { props.clienteSelecionado ? (
          <button onClick={() => props.clienteSelecionado?.(cliente)} className={` 
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {IconeEdicao}
          </button>
        ) : false }
        { props.clienteExcluido ? (
          <button onClick={() => props.clienteExcluido?.(cliente)} className={`
            text-red-500 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>
            {IconeLixo}
          </button>
        ) : false }
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
}