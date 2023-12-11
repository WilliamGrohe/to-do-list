import LogoImg from "./assets/Logo.svg";
import ClipboardIcon from "./assets/Clipboard.svg";
import TrashIcon from "./assets/trash.svg";

import { InputTask } from "./components/InputTask";

export function App() {
  return (
    <>
      <header className="bg-[var(--gray-700)] h-48 flex justify-center items-center mx-auto">
        <img src={LogoImg} alt="Logotipo do site todo" className="h-12" />
      </header>
      <main className="mx-auto w-[80%] max-w-[736px]">
        <InputTask />

        <div className="flex flex-col flex-1 mt-16">
          <header className="flex flex-1 justify-between text-sm font-bold">
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
          <div className="flex flex-col items-center text-[var(--gray-300)] mt-6 px-6 py-16 border-t-[1px] border-[var(--gray-400)] rounded-lg">
            <img src={ClipboardIcon} className="mb-4" />
            <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

          <div className="bg-[var(--gray-500)] text-[var(--gray-100)] text-sm flex gap-3 p-4 items-center rounded-lg transition-all">
            <div className="">
              <input
                type="checkbox"
                id="switch2"
                className="h-0 w-0 hidden peer"
              />

              <label
                htmlFor="switch2"
                className="cursor-pointer w-3 h-3 ring ring-[var(--blue)] hover:ring-[var(--dark-blue)] rounded-full block relative 
                          after:absolute after:top-[-4px] after:text-zinc-50
                          peer-checked:after:content-['\2714']
                          peer-checked:ring-[var(--dark-purple)] peer-checked:bg-[var(--dark-purple)]
                          peer-checked:hover:ring-[var(--purple)] peer-checked:hover:bg-[var(--purple)]
                          transition-all
                        "
              ></label>
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              iste, error porro suscipit officiis delectus. Tempora hic, eius ad
              totam maiores voluptas deleniti ducimus ratione placeat illum
              nemo? Molestias, aliquam?
            </div>
            <div className=" ">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-[var(--gray-300)] hover:stroke-[var(--danger)] p-1 rounded-md hover:bg-[var(--gray-400)] transition-all"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#058"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7l16 0" />
                  <path d="M10 11l0 6" />
                  <path d="M14 11l0 6" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
