import { useState, ChangeEvent } from 'react'

interface NoteInputProps {
  addNote(note: string): void
}

export const NoteInput: React.FC<NoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState('')

  const updateNote = (evt: ChangeEvent<HTMLInputElement>) => {
    setNote(evt.target.value)
  }

  const onAddNoteClick = () => {
    addNote(note)
    setNote('')
  }
  return (
    <div>
      <input
        onChange={updateNote}
        type="text"
        value={note}
        name="note"
        placeholder="note"
      />
      <button onClick={onAddNoteClick}>ADD NOTE</button>
    </div>
  )
}
