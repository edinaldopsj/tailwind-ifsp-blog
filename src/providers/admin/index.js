import axios from 'axios';
import { API } from '../../config/api';

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
export async function getAllUsers() {
  try {
    const { data } = await axios.get(`${API}/author`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
