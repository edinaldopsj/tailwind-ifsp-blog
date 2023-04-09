import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../Typography/Text';

/**
 * Render the news card
 * @param {object} props - the React Prop that contains data
 * @param {number} props.id - the news unique identification
 * @param {string} props.title - the title of this news
 * @param {string} props.subtitle - the subtitle of this news
 * @param {string} props.author - the author of this news
 * @param {string} props.date - the date of this news
 * @returns {JSX.Element}
 */
function NewsCard(props) {
  const {
    id,
    title,
    subtitle,
    date = new Date().toLocaleString('pt-BR'),
  } = props;

  return (
    <Link to={`news/${id}`}>
      <section className="my-4 flex justify-center cursor-pointer">
        <div className="flex flex-col gap-2 p-2 w-2/4  border-b-2 border-l-2">
          <Text as="h2" size="text-sm">{date}</Text>
          <Text as="h2" size="text-xl">{title}</Text>
          <Text as="h4">{subtitle}</Text>
        </div>
      </section>
    </Link>
  );
}

NewsCard.propTypes = {
  id: 'number',
  title: 'string',
  subtitle: 'string',
  date: 'string',
};

NewsCard.defaultProps = {
  id: 0,
  title: 'Title',
  subtitle: 'Subtitle',
  date: new Date().toLocaleString('pt-BR'),
};

export default NewsCard;
