import React from 'react';
import { Link } from 'react-router-dom';

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
        <header className="block p-6 rounded-lg shadow-lg bg-white w-3/4">
          <h6 className="text-gray-500 text-opacity-75 mb-1">{date}</h6>
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {title}
          </h5>
          <p className="text-gray-700 text-base mb-3">{subtitle}</p>
        </header>
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
