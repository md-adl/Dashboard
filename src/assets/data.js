import {
  burger1IconCategoryImg,
  cupIconCategoryImg,
  dessertIconCategoryImg,
  noodlesIconCategoryImg,
  pizzaIconCategoryImg,
  skewerIconCategoryImg,
  tacoIconCategoryImg,
  avatar1Img,
  avatar2Img,
  avatar3Img,
  avatar4Img,
  avatar5Img,
} from "./images";

function subtractHours(date, minutes) {
  date.setMinutes(date.getMinutes() - minutes);
  return date;
}

export const categoriesData = [
  {
    id: 1,
    name: "Coffee",
    image: cupIconCategoryImg,
  },
  {
    id: 2,
    name: "Burger",
    image: burger1IconCategoryImg,
  },
  {
    id: 3,
    name: "Noodles",
    image: noodlesIconCategoryImg,
  },
  {
    id: 4,
    name: "Pizza",
    image: pizzaIconCategoryImg,
  },
  {
    id: 5,
    name: "Wrap",
    image: tacoIconCategoryImg,
  },
  {
    id: 6,
    name: "Appetizers",
    image: skewerIconCategoryImg,
  },
  {
    id: 7,
    name: "Dessert",
    image: dessertIconCategoryImg,
  },
];
export const notificationsData = [
  {
    id: 1,
    name: "Datacorp",
    avatar: avatar1Img,
    subText: "Caleb Flakelar commented on Admin",
    createdAt: subtractHours(new Date(), 1),
  },
  {
    id: 2,
    name: "Admin",
    avatar: avatar2Img,
    subText: "New user registered",
    createdAt: subtractHours(new Date(), 60),
  },
  {
    id: 3,
    name: "Cristina Pride",
    subText: "Hi, How are you? What about our next meeting",
    avatar: avatar3Img,
    createdAt: subtractHours(new Date(), 120),
  },
  {
    id: 4,
    name: "Datacorp",
    avatar: avatar4Img,
    subText: "Caleb Flakelar commented on Admin",
    createdAt: subtractHours(new Date(), 1440),
  },
  {
    id: 5,
    name: "Karen Robinson",
    subText: "Wow ! this admin looks good and awesome design",
    avatar: avatar5Img,
    createdAt: subtractHours(new Date(), 1820),
  },
];

export const orderHistoryData = [
  {
    date: "12/03/2022",
    id: "#c0e4f7",
    amount: 359.69,
    status: "refunded",
    dish_id: 1001,
  },
  {
    date: "04/25/2023",
    id: "#12939f",
    amount: 350.3,
    status: "paid",
    dish_id: 1002,
  },
  {
    date: "06/20/2023",
    id: "#9f36ca",
    amount: 67.99,
    status: "cancelled",
    dish_id: 1003,
  },
  {
    date: "03/02/2023",
    id: "#a657a0",
    amount: 21.49,
    status: "paid",
    dish_id: 1005,
  },
  {
    date: "05/05/2023",
    id: "#8cd211",
    amount: 463.61,
    status: "refunded",
    dish_id: 1004,
  },
  {
    date: "06/07/2023",
    id: "#5191a8",
    amount: 333.31,
    status: "refunded",
    dish_id: 1006,
  },
  {
    date: "08/23/2023",
    id: "#6af783",
    amount: 391.0,
    status: "paid",
    dish_id: 1007,
  },
  {
    date: "05/02/2023",
    id: "#a6c5aa",
    amount: 150.63,
    status: "paid",
    dish_id: 1008,
  },
  {
    date: "05/22/2023",
    id: "#b07041",
    amount: 24.81,
    status: "cancelled",
    dish_id: 1009,
  },
  {
    date: "04/13/2023",
    id: "#94516a",
    amount: 72.21,
    status: "paid",
    dish_id: 1010,
  },
];
