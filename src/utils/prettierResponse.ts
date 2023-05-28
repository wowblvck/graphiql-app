export const prettierResponse = (response: string) => {
  return response
    .replaceAll(':{', ': {')
    .replaceAll(':[', ': [')
    .replaceAll('{', '{\n')
    .replaceAll('[{', '[\n{')
    .replaceAll(',', ',\n')
    .replaceAll('}', '\n}\n')
    .replaceAll('}\n,', '\n},')
    .replaceAll('\n\n}', '\n}');
};
