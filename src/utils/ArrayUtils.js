const removeFirst = (arr, item) => {
  for (let i = 0; i < arr.length; i += 1) {
    const el = arr[i];
    if (el === item) {
      return [
        ...arr.slice(0, i),
        ...arr.slice(i + 1),
      ];
    }
  }
  return arr;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  removeFirst,
};
