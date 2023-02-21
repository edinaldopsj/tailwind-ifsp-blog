import Wrapper from "./components/layout/Wrapper";
import NewsCard from "./components/NewsCard";
import Title from "./components/Title";

export default function App() {
  return (
    <Wrapper>
      {/* Main page title */}
      <Title title="IFSP - Dev New" />

      {/* News area */}
      <section className="mt-4">
        <NewsCard
          id={1}
          title="Noticia 01"
          subtitle="Venha conhecer a noticia 01"
        />
        <NewsCard
          id={2}
          title="Noticia 02"
          subtitle="Venha conhecer a noticia 02"
        />
      </section>
    </Wrapper>
  );
}
