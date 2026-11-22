export function getFirstLetterUppercase(str: string) {
  if (str.length) {
    return str[0]?.toUpperCase() + str.slice(1)
  }

  return str
}
