import axios from "axios";

export async function getImagesData() {
  const url = "https://api.kevinjobs.com:5000/v2/pictures?offset=0&limit=999&orderBy=createAt&order=desc";
  const resp = await axios.get(url);
  return resp.data.data;
}
