import { createCustomContext } from "../../Helpers/CreateCustomContext";

interface IGlobalState {
   user: IUser;
   sidebarItems: string[];
   selectedItem: string;
   isSidebarOpen: boolean;
}

interface IUser {
   name: string;
   image: string;
}

const initialState: IGlobalState = {
   user: {
      name: "John",
      image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
   },
   isSidebarOpen: true,
   sidebarItems: [
      "Dashboards",
      "Accounting",
      "Finance",
      "Supply Chain",
      "Sales",
      "Projects",
      "Customer Relations",
      "Human Resource",
   ],
   selectedItem: "Accounting",
};

const { Context, Provider, useContextHook } = createCustomContext<IGlobalState, {}>({ initialState, functions: {} });

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
