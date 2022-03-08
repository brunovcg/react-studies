import { styles } from "../../styles";
import { NoteInput } from "../components/NoteInput";

import { useDispatch, useSelector } from "react-redux";
import { NotesState } from "../Store/Reducer";

const ReduxType = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const addNote = (note: string) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  return (
    <div style={styles.style1}>
      <h2>REDUX + TypeScript</h2>

      <NoteInput addNote={addNote} />

      <hr />
      <ul>
        {notes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReduxType;
