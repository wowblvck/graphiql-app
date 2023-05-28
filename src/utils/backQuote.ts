const removeBackquote = (str: string) => {
  const pattern = /`([^`]+)`/g;
  return str.replace(pattern, '$1');
};

export { removeBackquote };
