import React from 'react';
import PropTypes from 'prop-types';
import { Link, Form, useParams } from 'react-router-dom';
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/solid';

import { useForm } from 'react-hook-form';
import Title from '../Title';
import Button from '../Button/Button';

import { defaultValues, resolver } from './validation';

import { LOCALE, LANG } from '../../lang/pt-br';
import ErrorLabel from '../ErrorLabel';

/**
 * Render the news body of the page, getting the data from the props
 * @param {Object} props - the React Prop that contains data
 * @param {Object} props.data - All the news data
 * @param {number} props.data.id - the news unique identification
 * @param {string} props.data.title - the title of this news
 * @param {string} props.data.subtitle - the subtitle of this news
 * @param {string} props.data.author - the author of this news
 * @param {string} props.data.updatedAt - the date of this news
 * @param {string} props.data.text - the content of this news
 * @param {number} props.data.likes - the number of likes of this news
 * @param {number} props.data.dislikes - the number of dislikes of this news
 * @param {Object[]} props.data.comments - the array of comments for this news
 * @param {number} props.data.comments.id - the unique Id of the commentary
 * @param {string} props.data.comments.content - the content the commentary
 * @param {string} props.data.comments.by - the name the commentary owner
 * @returns {JSX.Element}
 */

function NewsBody(props) {
  const { newsId } = useParams();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({ defaultValues, resolver });

  const {
    data, onComment, onLike, onDislike,
  } = props;

  const formattedDate = new Date(data?.updatedAt).toLocaleDateString(LOCALE);

  const handleCancelComment = () => {
    reset();
    setFocus('commentary');
  };

  const handleOnComment = (comment) => {
    reset();
    onComment(comment);
  };

  return (
    <article className="bg-white text-justify min-h-screen w-full py-6 px-8 md:px-60 xl:px-96">
      {/* Title, subtitle, author and date */}
      <Title title={data?.title} />
      <h5 className="text-lg text-center uppercase leading-tight">
        {data?.subtitle}
      </h5>
      <h5 className="text-gray-500 text-sm text-center text-opacity-70 italic uppercase">
        {`por ${data?.author}, em ${formattedDate}`}
      </h5>

      {/* Like section */}
      <section className="flex justify-center my-2 gap-2">
        <HandThumbUpIcon
          className="h-6 w-6 text-gray-500 hover:text-green-500 cursor-pointer"
          onClick={onLike}
        />
        <span>{data?.likes}</span>
        <HandThumbDownIcon
          className="h-6 w-6 text-gray-500 hover:text-red-500 cursor-pointer"
          onClick={onDislike}
        />
        <span>{data?.dislikes}</span>
      </section>

      {/* news by itself */}
      <section className="flex justify-center text-lg my-5">
        {data?.text}
      </section>

      {/* Comments section */}
      <section>
        <Form onSubmit={handleSubmit(handleOnComment)} action={`/news/${newsId}`}>
          <label htmlFor="commentary">
            Comentar
            <textarea
              id="commentary"
              className="border-2 border-gray-300 rounded-md w-full resize-none"
              rows={5}
              {...register('commentary')}
            />
            {errors.commentary ? (
              <ErrorLabel message={errors.commentary.message} />
            ) : null}
            <div className="flex flex-row justify-between">
              <Button defaultButton small onClick={handleCancelComment}>
                {LANG.NEWS.COMMENTS.CANCEL}
              </Button>
              <Button defaultButton small type="submit">
                {LANG.NEWS.COMMENTS.SUBMIT}
              </Button>
            </div>
          </label>
          <input type="hidden" value={newsId} {...register('id')} />
        </Form>

        {/* Comment list */}
        <section className="mt-8">
          {data?.comment?.map((commentItem) => (
            <section key={commentItem} className="my-12">
              <header className="flex flex-row justify-between">
                <h5 className="text-bold text-lg">{commentItem?.by}</h5>
                <h5>{new Date().toLocaleString('pt-BR')}</h5>
              </header>

              <p className="font-thin text-black">{commentItem}</p>

              <footer className="flex flex-row-reverse gap-2">
                <Button defaultButton small>
                  {LANG.NEWS.COMMENTS.EDIT}
                </Button>
                <Button defaultButton small>
                  {LANG.NEWS.COMMENTS.DELETE}
                </Button>
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
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    author: PropTypes.string,
    updatedAt: PropTypes.string,
    text: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    comment: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
        by: PropTypes.string,
      }),
    ),
  }),
  onComment: PropTypes.func,
  onLike: PropTypes.func,
  onDislike: PropTypes.func,
};

NewsBody.defaultProps = {
  data: {
    id: 0,
    title: '',
    subtitle: '',
    author: '',
    updatedAt: '',
    text: '',
    likes: 0,
    dislikes: 0,
    comment: [],
  },
  onComment: () => {},
  onLike: () => {},
  onDislike: () => {},
};

export default NewsBody;
