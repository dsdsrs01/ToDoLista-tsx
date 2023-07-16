import {
  StatusTasksCreateCompleted,
  TaskSpanCreate,
  CountTask,
  TaskSpanCompleted,
} from '../TopTask/styles'

interface ContenteLista {
  lista: string
}

export function TopTask({ lista }: ContenteLista) {
  return (
    <StatusTasksCreateCompleted>
      <TaskSpanCreate>
        Tarefas criadas <CountTask>{lista.length}</CountTask>
      </TaskSpanCreate>
      <TaskSpanCompleted>
        Concluídas <CountTask></CountTask>
      </TaskSpanCompleted>
    </StatusTasksCreateCompleted>
  )
}
