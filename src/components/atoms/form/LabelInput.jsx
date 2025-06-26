import { LuAsterisk } from "react-icons/lu"


export default function LabelInput({ htmlFor, texto, obrigatorio }) {
  return (
    <label htmlFor={htmlFor} className="text flex items-center gap-1">
      {texto}
      {obrigatorio && (
        <div className="text-red-400" title="Campo obrigatório">
          <LuAsterisk />
        </div>
      )}
    </label>
  )
}
