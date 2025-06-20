export default function Select(props) {
  return (
    <select
      {...props}
      className="
        text 
        px-4 
        py-2 
        border-1 
        rounded-lg 
        border-cinza-medio 
        outline-0 
        placeholder:text-cinza-medio 
        focus:border-verde-destaque 
        invalid:text-cinza-medio
      "
    >
      {props.children}
    </select>
  )
}
