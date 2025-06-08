import axios from "axios";
import { authHeader } from "../_helper/auth-header";



const rootUrl = 'http://localhost:5111/api/v1/'
export const assetUrl = 'http://localhost:5111/'


const authURL = rootUrl + 'admin';
const categoryURL = rootUrl + 'category';
const bannerURL = rootUrl + 'banners';
const pagesURL = rootUrl + "pages";
const productURL = rootUrl + "product";











async function getbanner() {
  return await axios.get( bannerURL);
}


//Pages

async function pagesData(id) {
  return await axios.get(pagesURL + '/' + id, {
    headers: await authHeader(),
  });
}

async function getTrendingproduct() {
  return await axios.get(productURL + '/trending', {
  });
}
async function getFeaturedproduct() {
  return await axios.get(productURL + '/featured', {
  });
}
async function getTopRatingPoduct() {
  return await axios.get(productURL + '/top-rating', {
  });
}
async function getTopSellerproduct() {
  return await axios.get(productURL + '/top-seller', {
  });
}
async function getLatestproduct() {
  return await axios.get(productURL + '/latest', {
  });
}
async function getAllproduct(limit, offset,  categoryId,  minPrice,  maxPrice,  minAge,  maxAge) {  
  return await axios.get(productURL + `/all?limit=${limit}&offset=${offset}&categoryId=${categoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}&minAge=${minAge}&maxAge=${maxAge}`, {
  });
}





export const service = {
  getbanner,

  pagesData,

  getTrendingproduct, getFeaturedproduct, getTopRatingPoduct, getTopSellerproduct, getLatestproduct, getAllproduct




}
