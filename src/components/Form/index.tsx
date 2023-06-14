import { useRef, useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss"
import ITarefa from "../../types/ITarefas"
import { v4 as uuidv4 } from 'uuid'

export default function Form({ setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) {

    
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");
    const formRef = useRef<HTMLFormElement>(null);

    function adicionarTarefa(event: React.FormEvent){
        event.preventDefault()
        const novaTarefa: ITarefa = {
            tarefa: tarefa,
            tempo: tempo,
            selecionado: false,
            completado: false,
            id: uuidv4()
            
        }
        setTarefas( (tarefasAntigas: ITarefa[]) => 
            [...tarefasAntigas, novaTarefa]
        )
        if(formRef.current) {
            formRef.current.reset()
        }
        setTarefa("")
        setTempo("00:00")
        
    }
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="tarefa"
                    value={tarefa}
                    onChange={(event) => setTarefa(event.target.value)}
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={(event) => setTempo(event.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

