export const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="rounded-2xl py-1 px-4 bg-slate-200 hover:bg-violet-200 hover:text-gray-600 transition-all ml-2"
    >
      {children}
    </button>
  );
};
