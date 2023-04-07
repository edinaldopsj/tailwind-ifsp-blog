import React from 'react';
import NewsCard from '../../components/NewsCard';

/**
 * Render the news list of the page, getting the data from the props
 * @param {Object} props - the React Prop that contains data
 * @param {Object[]} props.news - All the news list
 * @param {number} props.news.id - the news unique identification
 * @param {string} props.news.title - the title of this news
 * @param {string} props.news.subtitle - the subtitle of this news
 * @param {string} props.news.author - the author of this news
 * @param {string} props.news.updatedAt - the date of this news
 * @param {string} props.news.content - the content of this news
 * @param {number} props.news.likes - the number of likes of this news
 * @param {number} props.news.dislikes - the number of dislikes of this news
 * @param {Object[]} props.news.comments - the array of comments for this news
 * @param {number} props.news.comments.id - the unique Id of the commentary
 * @param {string} props.news.comments.content - the content the commentary
 * @param {string} props.news.comments.by - the name the commentary owner
 * @returns
 * */
function NewsList(props) {
  const { news } = props;

  return (
    <section className="mt-4">
      {news.map((newsItem) => (
        <NewsCard
          key={newsItem?.id}
          id={newsItem?.id}
          title={newsItem?.title}
          subtitle={newsItem?.subtitle}
        />
      ))}
    </section>
  );
}

NewsList.propTypes = {
  news: 'array',
};

NewsList.defaultProps = {
  news: [],
};

export default NewsList;
