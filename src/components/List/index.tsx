import Item from "./Item"
import style from "./List.module.scss"

export default function List() {
    const tarefa = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javascript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'Typescript',
            tempo: '03:00:00'
        }
    ]
    return(
        <aside className={style.listaTarefas}> 
            <h2>Estudos do dia</h2> 
            <ul>
                {tarefa.map((item, index) => 
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