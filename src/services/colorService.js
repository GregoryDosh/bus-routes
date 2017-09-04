export const stringColorHash = (hashStr) => {
  // Implementation of djb2 hash algorithm http://www.cse.yorku.ca/~oz/hash.html
  // then converted to range between 0 & 359
  let hash = 5381
  let char
  for (let i = 0; i < hashStr.length; i++) {
    char = hashStr.charCodeAt(i)
    hash = ((hash << 5) + hash) + char
  }
  return Math.abs(hash) % 359
}
