import { fetchData } from "../ApiClients";
export async function getFetch() {
  return await fetchData("http://165.227.235.34:8082/user/get-me", {
    method: "GET",
  });
}
