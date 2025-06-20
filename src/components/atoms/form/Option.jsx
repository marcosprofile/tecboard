export default function Option(props) {
  return (
    <option
      {...props}
      className={`bg-grafite text-white ${props.classes}`}
    >
      { props.children }
    </option>
  )
}
