export default function Button(props) {
  return (
    <button className="text cursor-pointer w-max m-auto rounded-lg font-semibold px-4 py-2 bg-verde-destaque text-grafite transition-all hover:bg-cinza-medio hover:text-white focus:outline-1 focus:outline-white active:bg-grafite active:text-white" {...props}>
      { props.label }
    </button>
  )
}
