export default function CategoryBar({ setCategory }) {
  const categories = ["All", "Electronics", "Clothing", "Shoes", "Mobiles"];

  return (
    <div className="bg-dark text-white py-2">
      <div className="container d-flex justify-content-around">

        {categories.map((cat, index) => (
          <span
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </span>
        ))}

      </div>
    </div>
  );
}