import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot, query } from "firebase/firestore";
import { firebaseConfig } from "@constants/fireBaseConfig.js";
import React, { useState, useEffect } from "react";

export const useData = () => {
  const [fetchData, setFetchData] = useState([]);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getData = async () => {
    // const q = query(collection(db, "chat"), where("name", "==", "avatar"));
    const data = query(collection(db, "chat"));

    onSnapshot(data, (querySnaphot) => {
      const array = [];
      querySnaphot.forEach((doc) => {
        array.unshift({ id: doc.id, data: doc.data() });
      });
      array.sort((a, b) => b.date - a.date);
      setFetchData(array);
    });
  };

  useEffect(() => {
    getData();
  }, [db, fetchData]);

  return [fetchData, setFetchData];
};

export default useData;
