import { useStateValue } from "../context/StateProvider";

export const FilterFood = (category) => {
    const [{ foodItems }, dispatch] = useStateValue();
    return foodItems?.filter((item) => item.category.toLowerCase() === category.toLowerCase());
};

export const GetFoodById = (id) => {
    const [{ foodItems }, dispatch] = useStateValue();
    return foodItems?.find((item) => item.id === id);
};
