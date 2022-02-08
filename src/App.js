import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  // API
  const [datas, setDatas] = useState([]);
  const apiKey = "517f7a208cae496c868b9a03fa95b109";
  // Value Input
  const [input, setInput] = useState("");

  // Dark Mode
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}&q=${input}`)
      .then((response) => {
        setDatas(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [input]);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-200 min-h-screen dark:bg-slate-800 dark:text-white">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        {/* Input */}
        <div className="w-full flex justify-center items-center">
          <input
            type={"text"}
            placeholder="Cari Berita ......."
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="px-3 py-2 mt-8 border shadow rounded w-full md:w-[900px]  text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 "
          />
        </div>
        {/* END INPUT */}

        {/* Content */}
        <div className="flex flex-wrap justify-center">
          {datas.map((data) => {
            return <Card title={data.title} image={data.urlToImage} desc={data.description} link={data.url} />;
          })}
        </div>
        {/* <div className="mx-auto">
          <button className="border rounded-xl bg-slate-500 my-5 px-3 py-1">Load More</button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
