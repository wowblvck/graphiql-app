export const prettierResponse = (response: string) => {
  return response
    .replaceAll(': {', ': {\n')
    .replaceAll(':{', ': {\n')
    .replaceAll(',', ',\n')
    .replaceAll('}', '\n}\n')
    .replaceAll('},', '\n},\n')
    .replaceAll('}\n,', '},');
};
