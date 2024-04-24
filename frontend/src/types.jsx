// Define interfaces
const FoodItemStatic = {
  id: number,
  title: string,
  desc: string,
  price: string,
  imgSrc: string
};

const FoodItemsStatic = {
  items: []
};

const FoodItem = {
  id: number,
  title: string,
  description: string,
  price: string,
  imageURL: string,
  calories: string,
  qty: string,
  category: string
};

const FoodItems = {
  items: []
};

const FoodCategory = {
  id: number,
  name: string,
  urlParam: string,
  icon: undefined
};

const CartItem = {
  id: number,
  fid: number,
  uid: string,
  qty: number
};

const CartItems = {
  items: []
};

const User = {
  uid: string,
  email: undefined,
  displayName: undefined,
  phoneNumber: undefined,
  providerId: string,
  photoURL: undefined
};

const FoodCategories = [];
