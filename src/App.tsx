import LogoImg from "./assets/Logo.svg";
import ClipboardIcon from './assets/Clipboard.svg'

export function App() {
  return (
    <>
      
        <header className="bg-[var(--gray-700)] h-48 flex justify-center items-center mx-auto">
          <img src={LogoImg} alt="Logotipo do site todo" className="h-12" />
        </header>
        <main className="mx-auto w-[80%] max-w-[736px]">
          <div className="flex justify-center gap-2 mt-[-26px]">
            <input
              type="text"
              className="flex flex-1 h-14 rounded-lg p-4 bg-[var(--gray-500)] text-[var(--gray-300)]"
              placeholder="Adicione uma nova tarefa"
            />
            <button
              type="submit"
              className="bg-[var(--dark-blue)] p-4 rounded-lg text-[var(--gray-100)] text-sm font-bold"
            >
              Criar
            </button>
          </div>

          <div className="flex flex-col flex-1 mt-16">
            <header  className="flex flex-1 justify-between text-sm font-bold">
              <p className="text-[var(--blue)]">Tarefas criadas <span className="bg-[var(--gray-400)] text-[var(--gray-200)] ml-2 px-2 py-[2px] rounded-xl">0</span></p>
              <p className="text-[var(--purple)]">Concluidas <span className="bg-[var(--gray-400)] text-[var(--gray-200)] ml-2 px-2 py-[2px] rounded-xl">0</span></p>
            </header>
            <div className="flex flex-col items-center text-[var(--gray-300)] mt-6 px-6 py-16 border-t-[1px] border-[var(--gray-400)] rounded-lg">
              <img src={ClipboardIcon} className="mb-4" />
              <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </main>
    </>
  );
}
// bg-[var(--gray-600)] min-h-screen