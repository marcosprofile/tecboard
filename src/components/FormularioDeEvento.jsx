import LabelInput from "./atoms/form/LabelInput";
import Input from "./atoms/form/Input";
import Select from "./atoms/form/Select";
import Option from "./atoms/form/Option";
import Button from "./atoms/Button";


export default function FormularioDeEvento() {
  return (
    <form className="bg-grafite p-8 rounded-2xl flex flex-col gap-8 w-full max-w-100">
      <h2 className="text text-xl">Preencha para criar um evento:</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="nome" texto="Qual o nome do evento?" />
          <Input type="text" id="nome" placeholder="Summer dev hits" />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="data" texto="Data do evento" />
          <Input type="date" id="data" />
        </div>
        <div className="flex flex-col gap-2">
          <LabelInput htmlFor="tema" texto="Tema do evento" />
          <Select defaultValue="" required>
            <Option classes="text-cinza-medio" value="" selected disabled hidden>Selecione uma opção</Option>
            <Option value="IA">IA</Option>
            <Option value="Front-end">Front-end</Option>
            <Option value="Backend">Backend</Option>
            <Option value="Devops">Devops</Option>
            <Option value="Data Science">Data Science</Option>
            <Option value="Cloud">Cloud</Option>
          </Select>
        </div>
      </div>
      <Button type="submit" label="Criar evento" />
    </form>
  )
}
