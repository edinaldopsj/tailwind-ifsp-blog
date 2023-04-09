/* eslint-disable no-unused-vars */
// TODO: remove lint rule
import { NEWS_LIST_MOCK } from '../../../assets/mocks/news.mock';

/**
 * Get news list for the admin or the author
 * @param {Headers} userId - the user id from the token object
 * @param {Headers} role - the user role from the token object
 * @param {object[]} userNews The array of news list for the admin or the author
 * @param {string} userNews.id The news id
 * @param {string} userNews.updatedAt The news updatedAt
 * @param {string} userNews.title The news title
 * @param {string} userNews.content The news content
 * @returns {Promise}
 * @example
 * getNews().then((userNews) => {
 *  console.log(userNews);
 * });
 * */
export function getUserNews() {
  // TODO: promise that returns data from database service - GET
  return NEWS_LIST_MOCK;
}

/**
 * Get single news item for the admin or the author
 * @param {Headers} userId - the user id from the token object
 * @param {Headers} role - the user role from the token object
 * @param {string} userNews.id The news id
 * @returns {Promise}
 * @example
 * getUserNewsItem().then(({userNewsId}) => {
 * console.log(userNews);
 * });
 */
export function getUserNewsItem({ userNewsId }) {
  // TODO: promise that returns data from database service - GET
}

/**
  * Create single news item
  * @param {Headers} userId - the user id from the token object
  * @param {Headers} role - the user role from the token object
  * @param {object} userNews The news object
  * @param {string} userNews.id The news id
  * @param {string} userNews.updatedAt The news updatedAt
  * @param {string} userNews.title The news title
  * @param {string} userNews.content The news content
  * @returns {Promise}
  * @example
  * createUserNews().then((userNews) => {
  * console.log(userNews);
  * });
 */
export function createUserNews({ userNews }) {
  // TODO: cretae promise that updates news in database service - POST
}
/**
  * Update single news item
  * @param {Headers} userId - the user id from the token object
  * @param {Headers} role - the user role from the token object
  * @param {object} userNews The news object
  * @param {string} userNews.id The news id
  * @param {string} userNews.updatedAt The news updatedAt
  * @param {string} userNews.title The news title
  * @param {string} userNews.content The news content
  * @returns {Promise}
  * @example
  * updateUserNews().then((userNews) => {
  * console.log(userNews);
  * });
 */
export function updateUserNews({ userNews }) {
  // TODO: create promise that updates news in database service - PUT
}

/**
 * Delete single news item
 * @param {Headers} userId - the user id from the token object
 * @param {Headers} role - the user role from the token object
 * @param {string} userNewsId The news id
 * @returns {Promise}
 * @example
 * deleteUserNews().then((userNews) => {
 * console.log(userNews);
 * });
 * */
export function deleteUserNews({ userNewsId }) {
  // TODO: create promise that deletes news in database service - DELETE
}

/**
 * Publish single news item
 * @param {Headers} userId - the user id from the token object
 * @param {Headers} role - the user role from the token object
 * @param {string} userNewsId The news id
 * @returns {Promise}
 * @example
 * publishUserNews().then((userNews) => {
 * console.log(userNews);
 * });
 * */
export function publishUserNews({ userNewsId }) {
  // TODO: create promise that publishes news in database service - PATCH
}