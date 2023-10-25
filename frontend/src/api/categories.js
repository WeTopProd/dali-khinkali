import axios from "axios";

export const categoriesApi = {
  getAll: async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/goods");
    return await res.data.results;
  },
  getBuisnessLunch: async () => {
    const all = await categoriesApi.getAll();
    const BL = await all.filter((el) => el.type == "business_lunch");
    return BL;
  },
  getSalads: async () => {
    const all = await categoriesApi.getAll();
    const Salads = await all.filter((el) => el.type == "salads");
    return Salads;
  },
  getSnacks: async () => {
    const all = await categoriesApi.getAll();
    const Snacks = await all.filter((el) => el.type == "snacks");
    return Snacks;
  },
  getSoups: async () => {
    const all = await categoriesApi.getAll();
    const Soups = await all.filter((el) => el.type == "soups");
    return Soups;
  },
  getGarnish: async () => {
    const all = await categoriesApi.getAll();
    const Garnish = await all.filter((el) => el.type == "side_dishes");
    return Garnish;
  },

  getBekery: async () => {
    const all = await categoriesApi.getAll();
    const Bekery = await all.filter((el) => el.type == "bakery");
    return Bekery;
  },

  getHotDishes: async () => {
    const all = await categoriesApi.getAll();
    const HotDishes = await all.filter((el) => el.type == "hot_dishes");
    return HotDishes;
  },

  getDishesOnTheGrill: async () => {
    const all = await categoriesApi.getAll();
    const DishesOnTheGrill = await all.filter(
      (el) => el.type == "dishes_grill"
    );
    return DishesOnTheGrill;
  },

  getSauces: async () => {
    const all = await categoriesApi.getAll();
    const Sauces = await all.filter((el) => el.type == "sauces");
    return Sauces;
  },

  getBread: async () => {
    const all = await categoriesApi.getAll();
    const Bread = await all.filter((el) => el.type == "bread");
    return Bread;
  },

  getDessert: async () => {
    const all = await categoriesApi.getAll();
    const Dessert = await all.filter((el) => el.type == "dessert");
    return Dessert;
  },

  getDrinks: async () => {
    const all = await categoriesApi.getAll();
    const DR = await all.filter((el) => el.type == "drinks");
    return DR;
  },
  getSlider: async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/goods?promotion=new_items"
    );
    return await res.data.results;
  },
};
