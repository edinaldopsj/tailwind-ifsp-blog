import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/solid';

import Title from '../Title';
import Button from '../Button';

import { LOCALE, LANG } from '../../lang/pt-br';

/**
 * Render the news body of the page, getting the data from the props
 * @param {Object} props - the React Prop that contains data
 * @param {Object} props.data - All the news data
 * @param {number} props.data.id - the news unique identification
 * @param {string} props.data.title - the title of this news
 * @param {string} props.data.subtitle - the subtitle of this news
 * @param {string} props.data.author - the author of this news
 * @param {string} props.data.updatedAt - the date of this news
 * @param {string} props.data.content - the content of this news
 * @param {number} props.data.likes - the number of likes of this news
 * @param {number} props.data.dislikes - the number of dislikes of this news
 * @param {Object[]} props.data.comments - the array of comments for this news
 * @param {number} props.data.comments.id - the unique Id of the commentary
 * @param {string} props.data.comments.content - the content the commentary
 * @param {string} props.data.comments.by - the name the commentary owner
 * @returns
 */

function NewsBody(props) {
  const [commentary, setCommentary] = useState('');
  const { data } = props;

  if (!data?.id) return (<div>Notícia Inválida</div>);

  const formattedDate = new Date(data?.updatedAt).toLocaleDateString(LOCALE);
  const commentaryRef = useRef();

  const handleLikeNews = () => {
    // TODO: handle the like button
  };

  const handleDislikeNews = () => {
    // TODO: handle the dislike button
  };

  const handleCancelComment = () => {
    setCommentary('');
    commentaryRef.current.focus();
  };

  const handleCommentForm = (e) => {
    e.preventDefault();

    // TODO: add businness logic addComment here
  };

  return (
    <article className="bg-white text-justify w-full px-80 py-6 h-full">
      {/* Title, subtitle, author and date */}
      <Title title={data?.title} />
      <h5 className="text-2xl text-center">{data?.subtitle}</h5>
      <h5 className="text-gray-500 text-md text-center text-opacity-70 italic">
        {`por ${data.author}, em ${formattedDate}`}
      </h5>

      {/* Like section */}
      <section className="flex justify-center my-2 gap-2">
        <HandThumbUpIcon
          className="h-6 w-6 text-gray-500 hover:text-green-500 cursor-pointer"
          onClick={handleLikeNews}
        />
        <span>{data.likes}</span>
        <HandThumbDownIcon
          className="h-6 w-6 text-gray-500 hover:text-red-500 cursor-pointer"
          onClick={handleDislikeNews}
        />
        <span>{data.dislikes}</span>
      </section>

      {/* news by itself */}
      <section className="flex justify-center text-lg my-5">
        {data.content}
      </section>

      {/* Comments section */}
      <section>
        <form onSubmit={handleCommentForm}>
          <label htmlFor="commentary">
            Comentar
            <textarea
              id="commentary"
              className="border-2 border-gray-300 rounded-md w-full resize-none"
              onChange={(e) => setCommentary(e.target.value)}
              value={commentary}
              ref={commentaryRef}
              rows={5}
              required
            />
            <div className="flex flex-row justify-between">
              <Button label={LANG.NEWS.COMMENTS.CANCEL} onClick={handleCancelComment} />
              <Button type="submit" />
            </div>
          </label>
        </form>

        {/* Comment list */}
        <section className="mt-8">
          {data?.comments?.map((comment) => (
            <section key={comment?.id} className="my-3">
              <header className="flex flex-row justify-between">
                <h5 className="text-bold text-lg">{comment.by}</h5>
                <h5>{new Date().toLocaleString('pt-BR')}</h5>
              </header>

              <p className="font-thin text-black">
                {comment.content}
              </p>

              <footer className="flex flex-row-reverse gap-2">
                <button>{LANG.NEWS.COMMENTS.EDIT}</button>
                <button>{LANG.NEWS.COMMENTS.DELETE}</button>
              </footer>
            </section>
          ))}
        </section>
      </section>

      {/* Footer, back to previous page */}
      <footer className="flex justify-center py-3">
        <Link className="text-blue-400 no-underline" to="/">
          {LANG.NEWS.BACK}
        </Link>
      </footer>
    </article>
  );
}

NewsBody.propTypes = {
  data: {
    id: 'number',
    title: 'string',
    subtitle: 'string',
    author: 'string',
    updatedAt: 'string',
    content: 'string',
    likes: 'number',
    dislikes: 'number',
    comments: [
      {
        id: 'number',
        content: 'string',
        by: 'string',
      },
    ],
  },
};

NewsBody.defaultProps = {
  data: {
    id: 0,
    title: '',
    subtitle: '',
    author: '',
    updatedAt: '',
    content: '',
    likes: 0,
    dislikes: 0,
    comments: [],
  },
};

export default NewsBody;
