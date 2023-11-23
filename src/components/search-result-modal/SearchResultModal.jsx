import "./search-result-modal.scss";

const data = [
  { id: 1, title: "Abrorov Sardor" },
  { id: 2, title: "Adhamov Muhammad" },
  { id: 3, title: "Rahimov Farrux" },
  { id: 4, title: "Ismonov Mirxonjon" },
  { id: 5, title: "Umirzakov Muhammadyosin" },
  { id: 6, title: "Raximov Elyor" },
];

const SearchResultModal = () => {
  return (
    <div className="search-result__modal">
      {data?.map((item) => {
        return <p key={item?.id} className="search-result">{item?.title}</p>;
      })}
    </div>
  );
};

export default SearchResultModal;
