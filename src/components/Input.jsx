export default function Input({ label, value, onChange }) {
  return (
    <fieldset>
      {label && <label htmlFor="input">{ label }</label>}
      <input id="input" value={value} onChange={onChange} />
    </fieldset>
  )
}
