import { useEffect } from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./constants/fireBaseConfig";
import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { Context } from './context';
import ItemList from "./components/ItemList";
import Input from "./components/Input";

function App() {
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

  return (
    <main>
      <Context.Provider value={[fetchData, setFetchData]}>
        <ItemList data={fetchData} />
        <Input />
      </Context.Provider>
    </main>
  );
}

export default App;
