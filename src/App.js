import { useState } from 'react';
import './App.css';
import EntryEdit from './components/EntryEdit';
import EntryList from './components/EntryList';
import createNewEntry from './utilities/createNewEntry';
import saveEntry from './utilities/saveEntry';

function App() {
  const [userId, setUserId] = useState(1);
  const [curEntry, setCurEntry] = useState(null);
  if (curEntry !== null) {
    return (
      <EntryEdit
        entry={curEntry}
        onSave={(entry) => {
            saveEntry(entry);
            setCurEntry(null);
          }}
      />
    )
  } else {
    return (
      <>
        <EntryList userId={userId} />
        <button onClick={() => setCurEntry(createNewEntry(userId))}>New</button>
      </>
    );
  }
}

export default App;
