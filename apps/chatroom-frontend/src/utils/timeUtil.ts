export default function formatDate(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
}
