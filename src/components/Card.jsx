const Card = (props) => {
  return (
    <div className="max-w-md border border-slate-200 rounded-xl mx-auto shadow-md font-serif my-10 p-5 hover:bg-sky-500 group dark:hover:bg-slate-400 ">
      <h5 className="font-bold text-slate-700 text-lg mb-3 group-hover:text-white dark:group-hover:text-slate-800">{props.title}</h5>
      <img src={props.image} alt="image" />
      <p className="text-slate-600 group-hover:text-white selection:bg-lime-300 selection:text-slate-600 dark:group-hover:text-slate-800 pt-6">{props.desc}</p>
      <div className="mx-auto">
        <button className="my-10 bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-inter mx-auto block hover:bg-sky-700 active:bg-sky-900 focus:ring focus:ring-sky-300 dark:bg-slate-300 dark:text-slate-700 dark:hover:text-slate-900 dark:hover:bg-slate-100">
          <a href={props.link} target="_blank">
            Read More
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
