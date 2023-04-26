import React from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import Wrapper from './components/layout/Wrapper';
import NewsList from './pages/NewsList';

function App() {
  const newsData = useLoaderData();

  return (
    <Wrapper>
      <Await
        resolve={newsData}
        errorElement={
          <div>Could not load news 😬</div>
          }
        // eslint-disable-next-line react/no-children-prop
        children={(news) => (
          <NewsList news={news} />
        )}
      />
    </Wrapper>
  );
}

export default App;
