/* eslint-disable no-unused-vars */
// TODO: remove lint rule
import axios from 'axios';
import { API } from '../../../config/api';

/**
 * Get news list for the site
 * @returns {Promise} news
 * @returns {object[]} news The array of news list
 * @returns {string} news.id The news id
 * @returns {string} news.updatedAt The news updatedAt
 * @returns {string} news.title The news title
 * @returns {string} news.content The news content
 * @example
 * getNews().then((news) => {
 *  console.log(news);
 * });
 * */
export async function getNews() {
  try {
    const { data } = await axios.get(`${API}/news`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Get news list for the site by authors and its number of news
 * @param {object[]} news The array of news list
 * @param {string} news.id The news id
 * @param {string} news.updatedAt The news updatedAt
 * @param {string} news.title The news title
 * @param {string} news.content The news content
 * @returns {Promise}
 * @example
 * getNewsByAuthors().then((news) => {
 *  console.log(news);
 * });
 * */
export async function getNewsByAuthors() {
  try {
    const { data } = await axios.get(`${API}/author`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Get news list for the site by author nickname
 * @param {string} authorNickname the author nickname
 * @returns {Promise}
 * @example
 * getNewsByAuthor().then((news) => {
 * console.log(news);
 * });
 * */
export async function getNewsByAuthor(authorNickname) {
  try {
    const { data } = await axios.get(`${API}/by/${authorNickname}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Get single news item for the admin or the author
 * @param {string} newsId The news id
 * @returns {Promise<object>} news The news object
 * @returns {string} news.id The news id
 * @returns {string} news.updatedAt The news updatedAt
 * @returns {string} news.title The news title
 * @returns {string} news.content The news content
 * @returns {string} news.comments The news content
 * @returns {string} news.likes The news content
 * @returns {string} news.dislikes The news content
 * @example
 * getNewsItem().then(({newsId}) => {
 *  console.log(news);
 * });
 */
export async function getNewsItem(newsId) {
  try {
    const { data } = await axios.get(`${API}/news/${newsId}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Create comment for news item - reader
 * @param {Headers} userId - the user id from the token object
 * @param {object} comment The comment object
 * @param {string} comment.content The comment content
 * @return {Promise} comment The comment object
 * @return {string} comment.content The comment content
 * @return {string} comment.updatedAt The comment date
 * @example
 * createComment().then((comment) => {
 * console.log(comment);
 * });
 *  */
export async function createComment({ comment, userId, newId }) {
  try {
    const { data } = await axios.post(`${API}/comments`, {
      comment,
      userId,
      newId,
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Update comment for news item - reader
 * @param {Headers} userId - the user id from the token object
 * @param {object} comment The comment object
 * @param {string} comment.content The comment content
 * @return {Promise} comment
 * @return {string} comment.content The comment content
 * @return {string} comment.updatedAt The comment date
 * @example
 * updateComment().then((comment) => {
 * console.log(comment);
 * });
 * */
export async function updateComment({
  commentaryId,
  comment,
  userId,
  newId,
}) {
  try {
    const { data } = await axios.put(`${API}/comments/${commentaryId}`, {
      comment,
      userId,
      newId,
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Delete comment for news item - reader or admin
 * @param {Headers} userId - the user id from the token object
 * @param {Headers} role - the user role from the token object
 * @param {object} comment The comment object
 * @param {string} comment.content The comment content
 * @return {Promise} - success
 * @example
 * deleteComment().then((comment) => {
 * console.log(comment);
 * });
 * */
export async function deleteComment(commentId) {
  try {
    const { data } = await axios.delete(`${API}/comments/${commentId}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Like single news item
 * @param {Headers} userId - the user id from the token object
 * @param {Headers} role - the user role from the token object
 * @param {string} newsId The news id
 * @param {string} type The type of like - like or dislike - LIKE/DISLIKE
 * @return {Promise} - success
 * @example
 * likeNews().then((news) => {
 * console.log(news);
 * });
 * */
export function likeNews({ newsId, type }) {
  // TODO: create like promise in database service - POST
}
