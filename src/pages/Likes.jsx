import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

function Likes() {
  let { data, isPending } = useFetch(
    `https://run.mocky.io/v3/7a4b2269-65dc-44e7-9e90-748076e5f82d`
  );

  let likesFromLocal = () => {
    return JSON.parse(localStorage.getItem(`likes`));
  }

  let likes = likesFromLocal()

  let likedProds = data?.data && data.data.filter((obj) => {
    return (likes?.includes(obj.id))
  })

  console.log(likedProds);

  return (
    <div className="main-container mt-10">
      <div className="grid grid-cols-3 gap-5">
        <ProductCard data={likedProds} />
      </div>
    </div>
  )
}

export default Likes