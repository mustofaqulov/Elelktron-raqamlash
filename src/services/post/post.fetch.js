import { fetchData } from "../ApiClients";
export async function postFetch(formData) {
  console.log(formData);
  return await fetchData("http://165.227.235.34:8082/citizen/addCitizen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //  "application/json"
    },
    body: formData,
  });
}
