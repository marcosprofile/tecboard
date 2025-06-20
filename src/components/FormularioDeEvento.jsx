import LabelInput from "./atoms/form/LabelInput";
import Input from "./atoms/form/Input";
import Select from "./atoms/form/Select";
import Option from "./atoms/form/Option";
import Button from "./atoms/Button";
import { useState } from "react";
import { temas } from './../utils/Temas';


export default function FormularioDeEvento({ onSubmit }) {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("")

  function formSubmit(formData) {
    const evento = {
      capa: formData.get('capaEvento'),
      tema: temas.find((item) => {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    onSubmit(evento)
    console.table(evento)
  }
  
  return (
    <form
      className="bg-grafite p-8 rounded-2xl flex flex-col gap-8 w-full max-w-100"
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formSubmit(formData)
      }}
    >
      <h2 className="text text-xl">Preencha para criar um evento:</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="capaEvento" texto="Qual o endereço da imagem de capa?" />
          <Input type="text" id="capaEvento" name="capaEvento" placeholder="http://..." />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="nomeEvento" texto="Qual o nome do evento?" />
          <Input type="text" id="nomeEvento" name="nomeEvento" placeholder="Summer dev hits" />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="dataEvento" texto="Data do evento" />
          <Input type="date" id="dataEvento" name="dataEvento" />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="tema" texto="Tema do evento" />
          <Select value={opcaoSelecionada} onChange={e => setOpcaoSelecionada(e.target.value)} id="tema" name="tema">
            <Option classes="text-cinza-medio" value="" disabled hidden>Selecione uma opção</Option>
            {temas.map((tema) => (
              <Option key={tema.id} value={tema.id}>{tema.nome}</Option>
            ))}
          </Select>
        </div>
      </div>
      <Button type="submit" label="Criar evento" />
    </form>
  )
}
