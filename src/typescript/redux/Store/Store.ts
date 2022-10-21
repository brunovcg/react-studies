import { createStore } from 'redux'
import { notesReducer } from './Reducer'

export const store = createStore(notesReducer)
