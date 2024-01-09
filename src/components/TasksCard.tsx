export function TasksCard({conteudo, chave, deleteTask}) {
  const inputChecked = document.querySelectorAll('label[class=peer-checked]');


  console.log(inputChecked.values)

  function handleDeleteTask(){
    event?.preventDefault()
    deleteTask(chave)
  }

  return (
    <div className="bg-[var(--gray-500)] text-[var(--gray-100)] text-sm flex gap-3 p-4 justify-between items-center  rounded-lg transition-all mb-4">
      <div className="teste">
        <input type="checkbox" id={chave} className="h-0 w-0 hidden peer" />

        <label
          htmlFor={chave}
          className="cursor-pointer w-3 h-3 ring ring-[var(--blue)] hover:ring-[var(--dark-blue)] rounded-full block relative 
                          after:absolute after:top-[-4px] after:text-zinc-50
                          peer-checked:after:content-['\2714']
                          peer-checked:ring-[var(--dark-purple)] peer-checked:bg-[var(--dark-purple)]
                          peer-checked:hover:ring-[var(--purple)] peer-checked:hover:bg-[var(--purple)]
                          peer-checked:[#corpo:]line-through
                          peer-checked:first:line-through
                          transition-all
                          "
        ></label>
      </div>
      <div id="corpo" className="flex-auto">
        {/* {chave.checked ? alert('sim') : alert('nao')} */}
       
        {conteudo}
      </div>
      <div className="">
        <button onClick={handleDeleteTask}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[var(--gray-300)] hover:stroke-[var(--danger)] p-1 rounded-md hover:bg-[var(--gray-400)] transition-all"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#058"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
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
  );
}
