import { styles } from '../../styles'
import { NoteInput } from '../components/NoteInput'

import { useDispatch, useSelector } from 'react-redux'
import { NotesState } from '../Store/Reducer'
import { addNote } from '../Store/Actions'

const ReduxType = () => {
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  )

  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }

  return (
    <div style={styles.style1}>
      <h2>REDUX + TypeScript</h2>

      <NoteInput addNote={onAddNote} />

      <hr />
      <ul>
        {notes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReduxType
