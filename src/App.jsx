import { Context } from "./context";
import ItemList from "./components/ItemList";
import Input from "./components/Input";
import { useData } from "./hooks/useData";

function App() {
  const [fetchData, setFetchData] = useData();

  const tailwindStyles = {
    chatContainer: "",
    main: "bg-gradient-to-r from-indigo-400 to-cyan-400 w-full h-full flex justify-center items-center",
    wrapperContainer: "w-[50rem] flex flex-col gap-2",
  };

  return (
    <main className={tailwindStyles.main}>
      <Context.Provider value={[fetchData, setFetchData]}>
        <div className={tailwindStyles.wrapperContainer}>
          <ItemList data={fetchData} />
          <Input />
        </div>
      </Context.Provider>
    </main>
  );
}

export default App;
