export default function useGetImg() {
  const accessKey = "7hERQb6YQPFqdB_aCRxs0i-6DtG5iJNrUmt1M2J5oK0";

  fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data from Unsplash:", error);
    });
}
