export const stripTrailingSlash = (str) => {
  if (str.endsWith('/')) {
    return str.slice(0, str.length - 1);
  } else {
    return str;
  }
};

export const colors = {
  earthy: '#7B714F',
  gray: '#363636',
  green: '#415b1e',
  blue: '#205bbb',
  beige: '#a6986f',
  black: '#333333',
};
