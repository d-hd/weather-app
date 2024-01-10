export function useDate(timestamp) {
  const unixDate = new Date(timestamp * 1000)
  const year = unixDate.getFullYear();
  const month = unixDate.getMonth();
  const date = unixDate.getDate();
  const hour = unixDate.getHours();
  const min = unixDate.getMinutes();

  const time = `${date}.${month}.${year} ${hour}:${min}`
  return time
}