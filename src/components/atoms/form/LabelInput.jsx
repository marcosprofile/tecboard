export default function LabelInput({ htmlFor, texto }) {
  return (
    <label htmlFor={htmlFor} className="text">
      {texto}
    </label>
  )
}
