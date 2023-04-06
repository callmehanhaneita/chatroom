export default function getQuery(name: string) {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(name);
}
