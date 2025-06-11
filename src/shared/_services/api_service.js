import axios from "axios";
import { authHeader } from "../_helper/auth-header";



const rootUrl = 'http://localhost:5111/api/v1/'
export const assetUrl = 'http://localhost:5111/'


const authURL = rootUrl + 'user';
const categoryURL = rootUrl + 'category';
const bannerURL = rootUrl + 'banners';
const pagesURL = rootUrl + "pages";
const productURL = rootUrl + "product";
const subscriptionURL = rootUrl + "subscription";
const newsLetterURL = rootUrl + "newsLetter";
const orderURL = rootUrl + "order";











async function getbanner() {
  return await axios.get(bannerURL);
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
async function getAllproduct(limit, offset, categoryId, minPrice, maxPrice, minAge, maxAge) {
  return await axios.get(productURL + `/all?limit=${limit}&offset=${offset}&categoryId=${categoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}&minAge=${minAge}&maxAge=${maxAge}`, {
  });
}
async function getProductById(id) {
  return await axios.get(productURL + '/byId/' + id, {
  });
}
/****Subscrip */
async function getsubscription() {
  return await axios.get(subscriptionURL)
}
async function addNewsLetter(email) {
  return await axios.post(newsLetterURL,{email})
}


/****Subscrip */
async function generateOrder(price, subscriptionId) {
  return await axios.get(orderURL + '/generateOrder?price=' + price + '&subscriptionId=' + subscriptionId)
}
async function confirmOrder(transactionId) {
  return await axios.post(orderURL + '/confirm', {
    paymentIntentId: transactionId
  }, {
    headers: await authHeader(),
  });
}
async function myOrders() {
  return await axios.get(orderURL + '/myOrders', {
    headers: await authHeader(),
  });
}
async function myActiveSubs() {
  return await axios.get(orderURL + '/myActiveSubscription', {
    headers: await authHeader(),
  });
}
async function loginUser(data) {
  return await axios.post(authURL + '/login',data, {
    headers: await authHeader(),
  });
}

async function getCategory() {
  return await axios.get(categoryURL + '/', {
    headers: await authHeader(),
  });
}



export const service = {
  getbanner,

  pagesData,

  getTrendingproduct, getFeaturedproduct, getTopRatingPoduct, getTopSellerproduct, getLatestproduct, getAllproduct, getProductById,

  getsubscription, addNewsLetter,


  generateOrder, confirmOrder, myOrders, myActiveSubs,

  loginUser,

  getCategory,



}
