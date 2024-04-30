import { sleep } from "../helpers/promise";

import {categoriesData} from '../assets/data'

export const calculatedPrice = (dish) => {
  return getPreciseCurrency(dish.price - calculateDiscount(dish));
};

export const getPreciseCurrency = (price) => {
  return parseFloat(price.toFixed(2));
};

export const calculateDiscount = (dish) => {
  return dish.sale?.type == "amount"
    ? dish.sale.discount
    : dish.sale?.type == "percent"
    ? (dish.price / 100) * dish.sale.discount
    : 0;
};

export const getAllCategories = async () => {
  // You can fetch data from your server here
  await sleep(200);
  return categoriesData;
};

export const getCategoryById = async (id) => {
  // You can fetch data from your server here
  await sleep(200);
  return categoriesData.find((category) => category.id == id);
};












