/* eslint-disable no-unused-vars */
// TODO: remove lint rule
import { NEWS_LIST_MOCK } from '../../../assets/mocks/news.mock';

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
export function getNews() {
  // TODO: promise that returns data from database service - GET
  return NEWS_LIST_MOCK;
}

/**
 * Get news list for the site by author nickname
 * @param {object[]} news The array of news list
 * @param {string} news.id The news id
 * @param {string} news.updatedAt The news updatedAt
 * @param {string} news.title The news title
 * @param {string} news.content The news content
 * @returns {Promise}
 * @example
 * getNews().then((news) => {
 *  console.log(news);
 * });
 * */
export function getNewsByAuthor() {
  // TODO: promise that returns data from database service - GET
  return NEWS_LIST_MOCK;
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
 * console.log(news);
 * });
 */
export function getNewsItem({ newsId }) {
  // TODO: promise that returns data from database service - GET
}

/**
 * Create comment for news item - reader
 * @param {Headers} userId - the user id from the token object
 * @param {object} comment The comment object
 * @param {string} comment.content The comment content
 * @return {Promise} comment
 * @return {string} comment.content The comment content
 * @return {string} comment.updatedAt The comment date
 * @example
 * createComment().then((comment) => {
 * console.log(comment);
 * });
 *  */
export function createComment({ comment }) {
  // TODO: promise that creates comment from user in database service - POST
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
export function updateComment({ comment }) {
  // TODO: create promise that updates comment from user in database service - PUT
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
export function deleteComment({ comment }) {
  // TODO: create promise that deletes comment from user in database service - DELETE
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
