import { createContext, useContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");

  useEffect(()=>{
    console.log("Bi ajillaj bna");
    const subscriber = auth().onAuthStateChanged((user)=>{
      if(user) setUser(user);
      if(loading) setLoading(false)
    });
    return subscriber;
  },[])


  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        `+976${phoneNumber}`
      );
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangePhoneNumber = (value) => {
    setPhoneNumber(value);
  };
  const handleChangeConfirmationCode = (value) => {
    setCode(value);
  };

  const confirmCode = async () => {
    try {
      return await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  };
  const logOut = async ()=>{
    await auth().signOut();
    setUser(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithPhoneNumber,
        handleChangePhoneNumber,
        handleChangeConfirmationCode,
        confirmCode,
        logOut,
        phoneNumber,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
