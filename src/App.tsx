import Form from "./components/Form";
import List from "./components/List";
import style from './App.module.scss'
import Cronometro from "./components/Cronometro";
import { useState } from "react";
import ITarefa from "./types/ITarefas";



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
