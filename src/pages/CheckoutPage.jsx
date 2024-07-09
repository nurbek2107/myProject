import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useState } from "react";
function CheckoutPage() {
  const [page, setPage] = useState(true);
  const handleSubmit = () => {
    setPage(false);
  };
  return (
    <div className={`main-container mt-11 mb-36 block ${page ? "": "flex justify-center"}`}>
      <div className={`flex justify-between ${page ? "w-[678px]":"w-[447px]"} `}>
        <div className="flex items-center gap-6">
          {page ? (
            <Link to="/cart">
              <img src="../assets/svg/arrow.svg" alt="" />
            </Link>
          ) : (
            <button onClick={() => setPage(true)}>
              <img src="../assets/svg/arrow.svg" alt="" />
            </button>
          )}
          <p className="text-primary font-semibold text-4xl">
            {page ? "Checkout" : "Payment"}
          </p>
        </div>
        <div className="flex gap-1 items-end">
          <div
            onClick={() => setPage(true)}
            className={`bg-[#359740] ${
              page ? "opacity-100" : "opacity-20"
            } w-[22px] h-[6px] rounded-[30px] cursor-pointer`}
          ></div>
          <div 
            onClick={() => setPage(false)}
            className={`bg-[#359740]  w-[22px] h-[6px] rounded-[30px] ${
              !page ? "opacity-100" : "opacity-20"
            } cursor-pointer`}
          ></div>
        </div>
      </div>
      {page && (
        <div className="checkout flex justify-between">
          <div className="w-[678px]">
            <form onSubmit={() => handleSubmit()}>
              <p className="text-primary font-semibold text-2xl mt-8 mb-4">
                Personal info
              </p>
              <div className="flex gap-[30px]">
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  labelText="Name"
                  width="w-[350px]"
                />
                <FormInput
                  type="text"
                  name="phone"
                  placeholder="Your Number"
                  labelText="Phone Number"
                  width="w-[350px]"
                />
              </div>
              <p className="text-primary font-semibold text-2xl mt-6 mb-4">
                Address
              </p>
              <div className="flex gap-[30px] mb-6">
                <FormInput
                  type="text"
                  name="state"
                  placeholder="Name of state"
                  labelText="State"
                  width="w-[350px]"
                />
                <FormInput
                  type="text"
                  name="city"
                  placeholder="Name of city"
                  labelText="City"
                  width="w-[350px]"
                />
              </div>
              <div className="flex gap-[30px] mt-4">
                <FormInput
                  type="text"
                  name="address"
                  placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                  labelText="Address"
                  width="w-[350px]"
                />
                <FormInput
                  type="text"
                  name="zip"
                  placeholder="ZIP code"
                  labelText="ZIP code"
                  width="w-[350px]"
                />
              </div>
              <button className="rounded-lg bg-[#359740] text-white px-12 py-3 mt-11">
                Continue
              </button>
            </form>
          </div>
          <div className="cart pt-6 pl-8 pb-10 pr-8 w-[350px] border shadow-xl rounded-xl">
            <p className="text-primary font-bold text-lg mb-5">Your cart</p>
            <div className="flex flex-col gap-[10px]">
              <div className="border-b-[1px]">
                <h5 className="text-sm leading-6 mb-2">
                  SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
                  Planting
                </h5>
                <p className="text-primary text-lg font-medium pb-2">$12.56</p>
              </div>
              <div className="border-b-[1px]">
                <h5 className="text-sm leading-6 mb-2">
                  SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
                  Planting
                </h5>
                <p className="text-primary text-lg font-medium pb-2">$12.56</p>
              </div>
              <div className="border-b-[1px]">
                <h5 className="text-sm leading-6 mb-2">
                  SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
                  Planting
                </h5>
                <p className="text-primary text-lg font-medium pb-2">$12.56</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-10">
              <p>Total amount</p>
              <p className="text-primary text-lg font-medium">$12.56</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
