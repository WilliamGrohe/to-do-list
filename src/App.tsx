import LogoImg from "./assets/Logo.svg";
import PlusIcon from "./assets/plus.svg";
import ClipboardIcon from "./assets/Clipboard.svg";

import { TasksCard } from "./components/TasksCard";
import { useState } from "react";

type TaskProps = {
  id: number,
  task: string,
}

export function App() {
  const [allTasks, setAllTasks] = useState([]);

  const [newTask, setNewTask] = useState<TaskProps>();

  function handleCreateNewTask() {
    event?.preventDefault();
    setAllTasks([...allTasks, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange() {
    setNewTask(event?.target.value);
  }
console.log(allTasks)
  return (
    <>
      <header className="bg-[var(--gray-700)] h-48 flex justify-center items-center mx-auto">
        <img src={LogoImg} alt="Logotipo do site todo" className="h-12" />
      </header>
      <main className="mx-auto w-[80%] max-w-[736px]">
        <form
          onSubmit={handleCreateNewTask}
          className="flex justify-center gap-2 mt-[-26px]"
        >
          <input
            type="text"
            className="flex flex-1 h-14 rounded-lg p-4 bg-[var(--gray-500)] text-[var(--gray-300)] valid:text-[var(--gray-100)] outline-none focus:border-[var(--dark-purple)] focus:border-[1px]"
            placeholder="Adicione uma nova tarefa"
            value={newTask?.task}
            onChange={handleNewTaskChange}
          />
          <button
            type="submit"
            className="bg-[var(--dark-blue)] p-4 rounded-lg text-[var(--gray-100)] text-sm font-bold flex items-center gap-2 outline-none focus:bg-[var(--blue)] hover:bg-[var(--blue)] transition-colors duration-100"
          >
            Criar <img src={PlusIcon} alt="Icone de adicionar" />
          </button>
        </form>

        <div className="flex flex-col flex-1 mt-16">
          <header className="flex flex-1 justify-between text-sm font-bold mb-6">
            <p className="text-[var(--blue)]">
              Tarefas criadas{" "}
              <span className="bg-[var(--gray-400)] text-[var(--gray-200)] ml-2 px-2 py-[2px] rounded-xl">
                0
              </span>
            </p>
            <p className="text-[var(--purple)]">
              Concluidas{" "}
              <span className="bg-[var(--gray-400)] text-[var(--gray-200)] ml-2 px-2 py-[2px] rounded-xl">
                0
              </span>
            </p>
          </header>

          {allTasks.length === 0 ? (
            <div className="flex flex-col items-center text-[var(--gray-300)] mt-6 px-6 py-16 border-t-[1px] border-[var(--gray-400)] rounded-lg">
              <img src={ClipboardIcon} className="mb-4" />
              <p className="font-bold">
                Você ainda não tem tarefas cadastradas
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            allTasks.map((post) => {
              return <TasksCard 
                conteudo={post} 
                chave={post}
              />;
            })
          )}
        </div>
      </main>
    </>
  );
}
