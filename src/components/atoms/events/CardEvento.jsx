import TagEvento from "./TagEvento";

export default function CardEvento(props) {
  return (
    <div className="flex flex-col sm:max-w-72 w-full rounded-2xl overflow-hidden shadow-2xl" id={props.id}>
      <img src={ props.src } alt="Imagem do evento"  />
      <div className="flex flex-col gap-2 p-6 bg-grafite">
        <TagEvento label={props.tag} />
        <span className="text text-xs py-1">{ props.data }</span>
        <h3 className="title text-2xl text-verde-destaque leading-[125%] font-bold sm:min-h-[60px]">{ props.title }</h3>
        <p className="text leading-[156%] font-light text-sm opacity-50 sm:min-h-[66px]">{ props.description }</p>
      </div>
    </div>
  )
}
