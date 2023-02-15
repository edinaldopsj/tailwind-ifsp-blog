import NewsCard from "./components/NewsCard";

export default function App() {
  return (
    <div class="flex justify-center h-screen border-2 border-red-400">
      <div className="flex-col justify-center border-2 border-green-500 w-3/5">
        {/* Main page title */}
        <h1 className="leading-loose text-4xl py-3 text-center">
         IFSP - Dev News
        </h1>

        {/* News area */}
        <section className="mt-4">
          <NewsCard title="Noticia 01" subtitle="Venha conhecer a noticia 01" />
          <NewsCard title="Noticia 02" subtitle="Venha conhecer a noticia 02" />
        </section>
      </div>
    </div>
  );
}
