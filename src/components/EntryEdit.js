
export default function EntryEdit({ entry, onSave }) {
  return (
    <div>
      <p>EntryEdit{JSON.stringify(entry)}</p>
      <button onClick={() => { onSave(entry) }}>Save</button>
    </div>
  )
}