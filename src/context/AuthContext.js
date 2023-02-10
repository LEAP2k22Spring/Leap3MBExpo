import { createContext, useContext, useState } from "react";
import auth from '@react-native-firebase/auth'
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, getUser] = useState();
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState("");

  // Handle the button press
  const signInWithPhoneNumber = async (phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithPhoneNumber }}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
