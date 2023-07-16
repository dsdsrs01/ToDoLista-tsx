import { PListaTask, TasksContainer, TasksCreate } from './styles'

import imgTasks from '../../assets/tasks.svg'

export function Tasks() {
  return (
    <TasksContainer>
      <TasksCreate>
        <img
          src={imgTasks}
          alt="Imagem svg cinza de uma lista de tarefas em uma prancheta"
        />
        <PListaTask>Você ainda não tem tarefas cadastradas</PListaTask>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </TasksCreate>
    </TasksContainer>
  )
}
