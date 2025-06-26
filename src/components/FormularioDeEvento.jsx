import LabelInput from "./atoms/form/LabelInput";
import Input from "./atoms/form/Input";
import Select from "./atoms/form/Select";
import Option from "./atoms/form/Option";
import Button from "./atoms/Button";
import { useState } from "react";
import { temas } from './../utils/Temas';
import { eventos } from './../utils/Eventos';
import Textarea from "./atoms/form/Textarea";
import { toast } from "react-toastify";


export default function FormularioDeEvento({ onSubmit }) {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("")

  function gerarIdUnico() {
    const todos = Object.values(eventos).flat()
    const maxId = todos.length ? Math.max(...todos.map(e => e.id || 0)) : 0
    return maxId + 1
  }

  function formSubmit(formData) {
    const temaId = parseInt(formData.get('tema'))
    const temaObj = temas.find((item) => item.id === temaId)

    const dateString = formData.get('dataEvento');
    const [year, month, day] = dateString.split('-').map(Number)
    const localDate = new Date(year, month - 1, day)

    const evento = {
      id: gerarIdUnico(),
      idTema: temaId,
      capa: formData.get('capaEvento'),
      tag: temaObj.nome,
      data: localDate.toLocaleDateString('pt-BR'),
      titulo: formData.get('nomeEvento'),
      descricao: formData.get('descricaoEvento')
    }

    console.log('Evento criado:', evento)
    toast.success('Evento criado com sucesso!')
    onSubmit(evento)
  }
  
  return (
    <form
      className="bg-grafite p-8 rounded-2xl flex flex-col gap-8 w-full max-w-100"
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formSubmit(formData)
        e.target.reset()
        setOpcaoSelecionada('')
      }}
      action={formSubmit}
    >
      <h2 className="text text-xl">Preencha para criar um evento:</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="capaEvento" texto="Endereço da imagem de capa" obrigatorio />
          <Input type="text" id="capaEvento" name="capaEvento" placeholder="http://..." required />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="nomeEvento" texto="Título" obrigatorio />
          <Input type="text" id="nomeEvento" name="nomeEvento" placeholder="Summer dev hits" required />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="descricaoEvento" texto="Descrição" />
          <Textarea id="descricaoEvento" name="descricaoEvento" placeholder="Digite aqui..." />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="dataEvento" texto="Data" obrigatorio />
          <Input type="date" id="dataEvento" name="dataEvento" required />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="tema" texto="Tema" obrigatorio />
          <Select value={opcaoSelecionada} onChange={e => setOpcaoSelecionada(e.target.value)} id="tema" name="tema" required>
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
