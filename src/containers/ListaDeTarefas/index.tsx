import Tarefa from '../../components/Tarefas'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver a aula da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no gmail',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>2 tarefas marcadas como: ”todas” e ”termo”</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
