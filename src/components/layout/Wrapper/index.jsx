export default function Wrapper({ children }) {
  return (
    <div className="flex justify-center h-screen border-2 border-red-400">
      <div className="flex-col justify-center border-2 border-green-500 w-3/5">
        {children}
      </div>
    </div>
  );
}
