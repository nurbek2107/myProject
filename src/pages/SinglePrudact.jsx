import "../index.css";
import { Breadcrumbs } from "@material-tailwind/react";
import { useState, useEffect } from "react";

function SinglePrudact() {
  const [itemData, setItemData] = useState(null);
  const [active, setActive] = useState("");
  const [quantity, setQuantity] = useState(1);
  const basePrice = 1.56; // Assuming a base price for one pack
 const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    try {
      const storedItem = JSON.parse(localStorage.getItem("selectedItem"));
      if (storedItem) {
        setItemData(storedItem);
        setActive(storedItem.image); // Assuming the image field contains the main image link
      } else {
        console.error("No item found in localStorage");
      }
    } catch (error) {
      console.error("Error parsing localStorage item:", error);
    }
  }, []);

  const handleQuantityChange = (operation) => {
    setQuantity((prevQuantity) => {
      if (operation === "increment") {
        return prevQuantity + 1;
      } else if (operation === "decrement" && prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        return prevQuantity;
      }
    });
  };

  if (!itemData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container mt-10">
      <div className="flex">
        <div className="mt-[18px]">
          <Breadcrumbs className="bg-white">
            <a href="#" className="opacity-60">
              Main
            </a>
            <a href="#" className="opacity-60">
              Catalog
            </a>
            <a href="#" className="opacity-60">
              {itemData.typeOfPlant}
            </a>
            <a href="#" className="opacity-60">
              {itemData.text}
            </a>
            <a href="#" className="">
              SEEDRA
            </a>
          </Breadcrumbs>
          <div>
            <div className="grid gap-4 w-[445px]">
              <div className="flex gap-10">
                <img
                  className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                  src={active}
                  alt={itemData.text}
                />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {itemData.additionalImages?.map((imgelink, index) => (
                  <div key={index}>
                    <img
                      onClick={() => setActive(imgelink)}
                      src={imgelink}
                      className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                      alt={`gallery-image-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#1F2533] text-2xl font-semibold mb-4 mt-[71px]">
            SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting
          </h1>
          <div className="flex gap-10">
            <button className="flex gap-2 items-center btn bg-white hover:bg-[#35974014] hover:text-[#4FA083] rounded-full">
              <svg
                width="17"
                height="12"
                viewBox="0 0 17 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1L6 11L1 6"
                  stroke="#4FA083"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              AVAILABLE
            </button>
            <button className="flex gap-2 items-center btn bg-white hover:bg-[#35974014] hover:text-[#4FA083] rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9328 1.80646C14.7487 1.63845 14.4927 1.55844 14.2367 1.61445L13.9967 1.66245C13.6047 1.62245 13.2046 1.59844 12.7966 1.59844C11.5565 1.59844 10.3564 1.80646 9.24436 2.18249L8.70833 0.550372C8.61232 0.254352 8.3483 0.0383365 8.03628 0.0063343C7.72426 -0.0336685 7.42024 0.118342 7.26022 0.390361L5.81212 2.86253C4.82806 2.11048 3.61997 1.59844 2.39589 1.59844C1.95586 1.59844 1.59583 1.95847 1.59583 2.3985C1.59583 2.83853 1.95586 3.19856 2.39589 3.19856C3.32395 3.19856 4.25202 3.64659 4.98807 4.24663L0.355746 7.33484C0.0597259 7.52686 -0.0682829 7.89488 0.0357243 8.2309C0.131731 8.56693 0.443753 8.79894 0.795777 8.79894H2.34788C1.86785 10.039 1.59583 11.3911 1.59583 12.7992C1.59583 12.9992 1.61183 13.1912 1.62783 13.3913C1.57983 13.5593 1.59583 13.7353 1.65184 13.8873C2.19587 19.5597 6.98021 24 12.7966 24C18.981 24 23.9974 18.9837 23.9974 12.7992C23.9974 7.34284 20.1011 2.80653 14.9328 1.80646ZM12.7966 22.3999C7.86827 22.3999 3.79598 18.6636 3.25995 13.8793L4.02 13.1432C4.10001 15.2794 4.94806 17.3995 6.58018 19.0237C8.2923 20.7358 10.5485 21.5998 12.8046 21.5998C15.0608 21.5998 17.3089 20.7438 19.029 19.0237C19.3411 18.7116 19.3411 18.2076 19.029 17.8956C18.717 17.5836 18.213 17.5836 17.901 17.8956C15.0928 20.7038 10.5245 20.7038 7.71626 17.8956C5.98014 16.1595 5.31609 13.7433 5.73212 11.4871L6.08414 11.1431L8.97234 14.8874C9.11635 15.0874 9.35637 15.1994 9.59639 15.1994C9.68439 15.1994 9.7724 15.1834 9.8524 15.1594C10.1804 15.0474 10.3964 14.7434 10.3964 14.3993V8.70294L16.0928 7.99089C16.4529 7.94288 16.7409 7.66287 16.7889 7.30284C16.8369 6.94282 16.6369 6.59879 16.3008 6.45478L12.9246 5.07069L14.5727 3.36657C19.021 4.20663 22.3973 8.1109 22.3973 12.7992C22.3973 18.0956 18.093 22.3999 12.7966 22.3999ZM6.03614 5.46271C6.05214 5.45471 6.05214 5.44671 6.06014 5.43871C6.27616 5.78273 6.39616 6.11876 6.39616 6.39878C6.39616 6.83881 6.75619 7.19883 7.19622 7.19883C7.63625 7.19883 7.99628 6.83881 7.99628 6.39878C7.99628 5.63872 7.61225 4.78267 6.98821 4.00661L7.73226 2.73452L8.07628 3.7906C8.20429 4.17462 8.59632 4.40664 8.99634 4.32663L12.0126 3.70259L10.9405 4.81467C10.7565 5.00668 10.6765 5.2787 10.7325 5.53472C10.7885 5.79074 10.9645 6.00675 11.2125 6.11076L12.8606 6.7828L9.49238 7.20683C9.10035 7.25484 8.79633 7.59886 8.79633 7.99889V12.0472L6.79619 9.44699C6.66018 9.26298 6.44417 9.15097 6.22015 9.13497C6.20415 9.13497 6.18015 9.13497 6.16415 9.13497C5.95613 9.13497 5.75612 9.21497 5.60411 9.35898L3.988 10.9271L4.76405 8.2069C4.83606 7.97489 4.78805 7.71887 4.63604 7.51886C4.48403 7.31884 4.24402 7.19883 3.996 7.19883H3.43596L6.03614 5.46271Z"
                  fill="#359740"
                />
              </svg>
              VEGETABLES
            </button>
          </div>

          <div className="mt-5">
            <div className="flex gap-10 items-center justify-between">
              <div className="flex gap-3 mt-[28px] items-end">
                <p>Size</p>
                <h1 className="text-[#1F2533] text-2xl font-semibold">
                  {quantity} PACK
                </h1>
              </div>
              <div className="flex items-center gap-4 border p-2 rounded-xl">
                <button
                  className="border-0 text-4xl"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <span className="bg-[#eff7f0] px-[12px] py-[5px] rounded-md text-2xl">
                  {quantity}
                </span>
                <button
                  className="border-0 text-4xl"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              {[...Array(4)].map((_, index) => {
                const isSelected = selectedOption === index;
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between border p-5 rounded-2xl cursor-pointer mt-3 ${
                      isSelected ? "border-[#359740]" : "hover:border-[#359740]"
                    }`}
                    onClick={() => setSelectedOption(index)}
                  >
                    <div className="flex gap-10">
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio-custom "
                        checked={isSelected}
                        onChange={() => setSelectedOption(index)}
                      />
                      <p>{((index + 1) * quantity).toFixed(0)} pack</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <p>start from</p>
                      <h3 className="text-[#1F2533] text-2xl font-semibold">
                        ${((index + 1) * basePrice * quantity).toFixed(2)}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePrudact;
