import NewsCard from "./components/NewsCard";
import Title from "./components/Title";

export default function App() {
  return (
    <div class="flex justify-center h-screen border-2 border-red-400">
      <div className="flex-col justify-center border-2 border-green-500 w-3/5">
        {/* Main page title */}
        <Title title="IFSP - Dev New"/>

        {/* News area */}
        <section className="mt-4">
          <NewsCard title="Noticia 01" subtitle="Venha conhecer a noticia 01" />
          <NewsCard title="Noticia 02" subtitle="Venha conhecer a noticia 02" />
        </section>
      </div>
    </div>
  );
}
