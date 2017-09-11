const queryStringFromObject = (obj) => {
  const str = Object.keys(obj).map((key) => {
    const uriKey = encodeURIComponent(key);
    const uriValue = encodeURIComponent(obj[key]);
    return `${uriKey}=${uriValue}`;
  }).join('&');

  return `?${str}`;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  queryStringFromObject,
};
