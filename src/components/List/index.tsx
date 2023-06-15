import ITarefa from "../../types/ITarefas"
import Item from "./Item"
import style from "./List.module.scss"


interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function List({ tarefas,  selecionaTarefa}: Props) {
    
    return(
        <aside className={style.listaTarefas}> 
            <h2>Estudos do dia</h2> 
            <ul>
                {tarefas.map((item) => 
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        tarefa={item.tarefa}
                        tempo={item.tempo} 
                        selecionado={item.selecionado} 
                        completado={item.completado} 
                        id={item.id}                    />
                )}
            </ul>    
        </aside>
        
    )
}