/**
 * @description: Capitalize the first letter of a string
 * @param {string} str
 * @return {string}
 * @example firstCharUpper('hello') => 'Hello'
 * @example firstCharUpper('world') => 'World'
 * @example firstCharUpper('hello world') => 'Hello world'
 */
export const firstCharUpper = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
