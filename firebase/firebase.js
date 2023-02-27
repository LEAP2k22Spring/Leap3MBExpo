import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";

export const useCollection = (path) => {
  const getData = async () => {
    console.log("Starting");
    try {
      const usersCollection = await firestore()
        .collection("Users")
        .doc("oE0Oxg82kzIcap7lGIzt")
        .get();
      console.log("usersCollection", usersCollection);
    } catch (error) {
      console.log("error", error);
    }
  };

  const createUser = async ()=>{
    try {
        
    } catch (error) {
        
    }
  }
  return { getData };
};


// export const useDocument = ({ path, docId }) => {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     if (docId) {
//       (async () => {
//         setLoading(true);
//         const docRef = doc(db, path, docId);
//         try {
//           const docSnap = await getDoc(docRef);
//           if (docSnap.exists()) {
//             setData(docSnap.data());
//           } else {
//             console.log("No such document!");
//           }
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setLoading(false);
//         }
//       })();
//     }
//   }, [path, docId]);
//   const updateData = (data) => setDoc(doc(db, path, docId), data);
//   const createData = (data) => addDoc(collection(db, path), data);
//   const deleteData = (docId) => deleteDoc(doc(db, path, docId));

//   return { data, loading, updateData, createData, deleteData };
// };