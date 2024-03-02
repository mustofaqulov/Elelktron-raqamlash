export async function fetchData(url, configs) {
  const req = await fetch(url, configs);
  if (!req.status) {
    throw new Error(req.statusText);
  }
  return await req.json();
}
