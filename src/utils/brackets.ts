const withoutBrackets = (str: string) => {
  const pattern = /[[\]!]/g;
  return str.replace(pattern, '');
};

export { withoutBrackets };
