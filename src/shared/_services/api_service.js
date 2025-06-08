import axios from "axios";
import { authHeader } from "../_helper/auth-header";



const rootUrl = 'http://localhost:5111/api/v1/'
export const assetUrl = 'http://localhost:5111/'


const authURL = rootUrl + 'admin';
const categoryURL = rootUrl + 'category';
const bannerURL = rootUrl + 'banners';
const pagesURL = rootUrl + "pages";











async function getbanner() {
  return await axios.get( bannerURL);
}


//Pages

async function pagesData(id) {
  return await axios.get(pagesURL + '/' + id, {
    headers: await authHeader(),
  });
}





export const service = {
  getbanner,

  pagesData




}
