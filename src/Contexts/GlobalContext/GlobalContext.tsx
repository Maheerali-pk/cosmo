import React from "react";
import DuplicateInvoice from "../../Dialogs/DuplicateInvoice";
import NewInvoiceDialog from "../../Dialogs/NewInvoiceDialog";
import { createCustomContext } from "../../Helpers/CreateCustomContext";

interface IGlobalState {
   user: IUser;
   sidebarItems: string[];
   selectedItem: string;
   settingsSidebarItems: string[];
   selectedSettingsSidebarItem: string;
   isSidebarOpen: boolean;
   dialog?: React.FC;
}

export interface IUser {
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
   settingsSidebarItems: ["Overview", "Teams", "Permissions", "Approvals", "Notifications", "Directory"],
   selectedSettingsSidebarItem: "Overview",
   selectedItem: "Accounting",
   dialog: DuplicateInvoice,
};

function setIsSidebarOpen(state: IGlobalState, value: boolean): IGlobalState {
   return { ...state, isSidebarOpen: value };
}

const functions = {
   setIsSidebarOpen,
   setDialog: (state: IGlobalState, dialog: React.FC | undefined): IGlobalState => ({ ...state, dialog }),
};

const { Context, Provider, useContextHook } = createCustomContext<IGlobalState, typeof functions>({
   initialState,
   functions,
});

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
