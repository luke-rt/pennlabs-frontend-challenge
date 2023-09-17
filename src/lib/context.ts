import { createContext } from "react";
import { Course } from "./types";

interface State {
  cart: Course[];
  setCart: React.Dispatch<React.SetStateAction<Course[]>>
}

export const CartContext = createContext(null as unknown as State);
