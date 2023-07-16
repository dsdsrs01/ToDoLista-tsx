import { Plus } from 'phosphor-react'
import { BaseInput, FormContainer, HomeContainer } from './styles'
import { Tasks } from '../../components/Tasks'

import { useState, useEffect } from 'react'
import { TopTask } from '../../components/TopTask'
import { ContentCheckList } from '../../components/ContentCheckList'
import {
  SpanCheckout,
  SpanConcluido,
} from '../../components/ContentCheckList/styles'

export function Home() {
  const listaStorage = localStorage.getItem('Lista')

  const [lista, setLista] = useState(
    listaStorage ? JSON.parse(listaStorage) : [],
  ) // Montando a lista
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    localStorage.setItem('Lista', JSON.stringify(lista))
  }, [lista]) // Monitorando a lista JSON

  function addItem() {
    if (!newItem) {
      // Não pode deixar vazio o campo de input
      return ''
    }
    setLista([
      ...lista,
      {
        text: newItem,
        isCompleted: false,
      },
    ])
    event?.preventDefault()
    setNewItem('')
    document.getElementById('input-entrada')?.focus()
  }

  function click(index) {
    const listAux = [...lista]
    listAux[index].isCompleted = !listAux[index].isCompleted
    setLista(listAux)
    event?.preventDefault()
  }

  function deleta(index) {
    const listaAux = [...lista]
    listaAux.splice(index, 1)
    setLista(listaAux)
    event?.preventDefault()
  }

  return (
    <HomeContainer>
      <form onSubmit={addItem}>
        <FormContainer>
          <BaseInput
            id="input-entrada"
            type="text"
            value={newItem}
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => {
              setNewItem(e.target.value)
            }}
          />
          <button type="submit">
            Criar
            <Plus />
          </button>
        </FormContainer>
      </form>
      <TopTask lista={lista} />
      {lista.length < 1 ? (
        <Tasks />
      ) : (
        lista.map((item, index) => (
          <ContentCheckList
            key={index}
            item={item}
            index={index}
            onClick={click}
            onDelete={deleta}
          />
        ))
      )}
    </HomeContainer>
  )
}
