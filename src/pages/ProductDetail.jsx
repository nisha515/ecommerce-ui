import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Detail {id}</h2>
      <input type="number" defaultValue={1} />
      <button className="btn btn-primary ms-2">Add to Cart</button>
    </div>
  );
}