export default function Option(props) {
  return (
    <option className={`bg-grafite text-white ${props.classes}`} {...props}>
      { props.children }
    </option>
  )
}
