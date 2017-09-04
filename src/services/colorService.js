import md5 from 'md5'

export const stringHSLColorHash = (hashStr) => {
  // Implementation of djb2 hash algorithm http://www.cse.yorku.ca/~oz/hash.html
  // then converted through MD5 to give good coverage across the range between 0 & 359
  let hash = 5381
  let char
  for (let i = 0; i < md5(hashStr).length; i++) {
    char = md5(hashStr).charCodeAt(i)
    hash = ((hash << 5) + hash) + char
  }
  return Math.abs(hash) % 359
}
