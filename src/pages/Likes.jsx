import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

function Likes() {
  let { data, isPending } = useFetch(`https://run.mocky.io/v3/ee534a3c-c22a-4d65-99b6-f2e10926b276`)

  let likesFromLocal = () => {
    return JSON.parse(localStorage.getItem(`likes`));
  }

  let likes = likesFromLocal()

  let likedProds = data?.data && data.data.filter((obj) => {
    return (likes.includes(obj.id))
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