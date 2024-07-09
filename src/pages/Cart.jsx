import { useFetch } from "../hooks/useFetch";

function Cart() {
  let { data, isPending } = useFetch(`https://run.mocky.io/v3/7a4b2269-65dc-44e7-9e90-748076e5f82d`)

  let checkedsFromLocal = () => {
    return JSON.parse(localStorage.getItem(`selectedItems`));
  }

  let selected = checkedsFromLocal();
  console.log(selected);

  return (
    <div className="my-[48px]">
      <div className='main-container'>
        <div className="w-8/12">
          <div className="flex justify-between items-center pb-[24px] border-b-2">
            <h1>Your Cart</h1>
            <p className="flex gap-2">
              <span>
                {selected && selected.length}
              </span>

              <span>
                items
              </span>
            </p>
          </div>

          <table className="pb-[28px] w-full">
            <thead>
              <tr>
                <th>PRODUCT DETAILS</th>
                <th className="mr-[70px]">AMOUNT</th>
                <th className="mr-[58px]">PRICE</th>
                <th>TOTAL</th>
              </tr>
            </thead>

            <tbody className="">
              {selected && selected.map((item) => {
                return (
                  <tr className="">
                    <>
                      <td className="flex items-center">
                        <img className="w-[100px]" src={item.image} alt={item.text} />
                        <p className="w-[260px] overflow-hidden">
                          {item.text}
                        </p>
                      </td>

                      <td className="w-[104px] h-[45px] py-[6px] gap-[10px] px-[14px] text-[#359740] border-2 border-[#EFEFEF] rounded-[11px]">
                        <button className="border-0">+</button>
                        <span className="bg-[#eff7f0] px-[12px] py-[5px] rounded-md">1</span>
                        <button className="border-0">-</button>
                      </td>

                      <td>
                        {item.price}$
                      </td>

                      <td>
                        24.56$
                      </td>
                    </>
                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>

        <div className="4/12">

        </div>
      </div>
    </div>
  )
}

export default Cart