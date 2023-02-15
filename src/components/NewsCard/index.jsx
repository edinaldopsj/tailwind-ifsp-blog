export default function NewsTitle(props) {
  const { 
    title, 
    subtitle, 
    date = new Date().toLocaleString('pt-BR') 
  } = props;

  return (
    <div className="my-4 flex justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white w-3/4">
        <p class="text-gray-500 text-opacity-75 mb-2">{date}</p>
        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
          {title}
        </h5>
        <p class="text-gray-700 text-base mb-4">{subtitle}</p>
      </div>
    </div>
  );
}