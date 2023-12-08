import PlusIcon from "../assets/plus.svg";

export function InputTask() {
  return (
    <div className="flex justify-center gap-2 mt-[-26px]">
      <input
        type="text"
        className="flex flex-1 h-14 rounded-lg p-4 bg-[var(--gray-500)] text-[var(--gray-300)] valid:text-[var(--gray-100)] outline-none focus:border-[var(--dark-purple)] focus:border-[1px]"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="submit"
        className="bg-[var(--dark-blue)] p-4 rounded-lg text-[var(--gray-100)] text-sm font-bold flex items-center gap-2 outline-none focus:bg-[var(--blue)] hover:bg-[var(--blue)] transition-colors duration-100"
      >
        Criar <img src={PlusIcon} alt="Icone de adicionar" />
      </button>
    </div>
  );
}
