export default function CardFront({ e }) {
  return (
    <div className="bg-gray-300 dark:bg-gray-700 p-2 rounded-lg w-[320px] md:w-[500px] h-[400px] transition-transform duration-1000 card_front">
      <img
        className="block rounded w-full  h-[250px] object-center mb-6"
        src={e.front.imgSrc}
        alt="content"
      />
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4 dark:text-white">
        {e.front.title}
      </h2>
      <p className="leading-relaxed text-base text-slate-500 dark:text-slate-400">
        {e.front.explanation}
      </p>
    </div>
  );
}
