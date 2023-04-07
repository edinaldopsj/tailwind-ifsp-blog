import Wrapper from "./components/layout/Wrapper";
import Title from "./components/Title";
import NewsList from "./pages/NewsList";
import { NEWS_LIST_MOCK } from "./assets/mocks/news.mock";

export default function App() {
  // TODO: create function to get the news list from the API
  // const getAllNews = () => {};

  return (
    <Wrapper>
      {/* Main page title */}
      <Title title="IFSP - Dev New" />

      <NewsList news={NEWS_LIST_MOCK} />
    </Wrapper>
  );
}
