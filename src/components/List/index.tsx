import ITarefa from "../../types/ITarefas"
import Item from "./Item"
import style from "./List.module.scss"

export default function List({ tarefas }:{ tarefas: ITarefa[]}) {
    
    return(
        <aside className={style.listaTarefas}> 
            <h2>Estudos do dia</h2> 
            <ul>
                {tarefas.map((item, index) => 
                    <Item 
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                )}
            </ul>    
        </aside>
        
    )
}