import { createContext, useContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
const AddBagContext = createContext();

export const AddBagContextProvider = ({ children }) => {
  const [addToBag, setAddToBag] = useState([]);
  return (
    <AddBagContext.Provider
      value={{
        setAddToBag,
        addToBag
      }}
    >
      {children}
    </AddBagContext.Provider>
  );
};
export const useAddBag = () => useContext(AddBagContext);
