import { queryStringFromObject } from './URIUtils';

// TODO: handle failures!

// TODO: provide this through other means!
const API_URL = '//content.guardianapis.com';
const API_KEY = '9wur7sdh84azzazdt3ye54k4';

const compatGet = (uri) => {
  // TODO: check actually XDomain!

  if (window.XDomainRequest) {
    return new Promise((resolve) => {
      const xdr = new XDomainRequest();

      xdr.open('get', uri);

      xdr.onload = () => {
        resolve(JSON.parse(xdr.responseText));
      };

      setTimeout(() => xdr.send());
    });
  }

  return fetch(uri).then(response => response.json());
};

// TODO: add path '/' if not present
// TODO: catch errors
const contentAPIQuery = (path, queryObj) => {
  const queryString = queryStringFromObject(queryObj);
  const uri = `${window.location.protocol}${API_URL}${path}${queryString}`;
  return compatGet(uri);
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
