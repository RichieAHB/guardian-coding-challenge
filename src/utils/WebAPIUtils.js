import { queryStringFromObject } from './URIUtils';

// TODO: provide this through other means!
const API_URL = 'https://content.guardianapis.com';
const API_KEY = '9wur7sdh84azzazdt3ye54k4';

// TODO: add path '/' if not present
// TODO: catch errors
const contentAPIQuery = (path, queryObj) => {
  const queryString = queryStringFromObject(queryObj);
  const uri = `${API_URL}${path}${queryString}`;
  return fetch(uri).then(response => response.json());
};

const search = (options = {}) =>
  contentAPIQuery(
    '/search',
    Object.assign({}, options, { 'api-key': API_KEY }),
  );

const searchSection = section => search({ section });

export {
  // eslint-disable-next-line import/prefer-default-export
  searchSection,
};
