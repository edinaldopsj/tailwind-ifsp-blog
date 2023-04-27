/* eslint-disable no-unused-vars */
// TODO: remove lint rule
import axios from 'axios';
import { NEWS_LIST_MOCK } from '../../../assets/mocks/news.mock';
import { API } from '../../../config/api';

/**
 * Get news list for the admin or the author
 * @param {Headers} userId - the user id from the token object
 * @param {Headers} role - the user role from the token object
 * @returns {Promise}
 * @example
 * getNews().then((userNews) => {
 *  console.log(userNews);
 * });
 * */
export async function getUserNews() {
  try {
    const { data } = await axios.get(`${API}/author/2`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Get single news item for the admin or the author
  * @param {Headers} userId - the user id from the token object
  * @param {Headers} role - the user role from the token object
  * @param {string} userNews.id The news id
  * @param {string} userNews.title The news title
  * @param {string} userNews.subtitle The news subtitle
  * @param {string} userNews.content The news content
  * @param {string} userNews.comments The news comments
  * @param {string} userNews.reactions The news reactions
  * @param {string} userNews.reactions.likes The news reactions as likes
  * @param {string} userNews.reactions.dislikes The news reactions as dislikes
  * @returns {Promise}
  * @example
 * getUserNewsItem().then(({userNewsId}) => {
 * console.log(userNews);
 * });
 */
export async function getUserNewsItem(userNewsId) {
  try {
    const { data } = await axios.get(`${API}/news/${userNewsId}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
  * Create single news item
  * @param {Headers} userId - the user id from the token object
  * @param {Headers} role - the user role from the token object
  * @param {object} userNews The news object
  * @param {string} userNews.id The news id
  * @param {string} userNews.updatedAt The news updatedAt
  * @param {string} userNews.title The news title
  * @param {string} userNews.subtitle The news subtitle
  * @param {string} userNews.content The news content
  * @returns {Promise}
  * @example
  * createUserNews().then((userNews) => {
  * console.log(userNews);
  * });
 */
export async function createUserNews({ userNews, userId }) {
  try {
    const { data } = await axios.post(`${API}/news`, {
      userId,
      ...userNews,
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
/**
  * Update single news item
  * @param {Headers} userId - the user id from the token object
  * @param {Headers} role - the user role from the token object
  * @param {object} userNews The news object
  * @param {string} userNews.id The news id
  * @param {string} userNews.title The news title
  * @param {string} userNews.subtitle The news subtitle
  * @param {string} userNews.updatedAt The news updatedAt
  * @param {string} userNews.content The news content
  * @returns {Promise}
  * @example
  * updateUserNews().then((userNews) => {
  * console.log(userNews);
  * });
 */
export async function updateUserNews({ userNews, userId, newsId }) {
  try {
    const { data } = await axios.put(`${API}/news/${newsId}`, {
      userId,
      ...userNews,
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
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
export async function deleteUserNews(userNewsId) {
  try {
    const { data } = await axios.delete(`${API}/news/${userNewsId}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
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
export async function publishUserNews(userNewsId) {
  try {
    const { data } = await axios.put(`${API}/publish/${userNewsId}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
