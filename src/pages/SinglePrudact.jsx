import React, { useState, useEffect } from "react";
import "../index.css";
import { Breadcrumbs } from "@material-tailwind/react";

function SinglePrudact() {
  const [itemData, setItemData] = useState(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("selectedItem"));
    if (storedItem) {
      setItemData(storedItem);
      setActive(storedItem.image); // Assuming the image field contains the main image link
    }
  }, []);

  if (!itemData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="main-container">
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
                {itemData.typeOfPlant} {/* Example breadcrumb data */}
              </a>
              <a href="#" className="opacity-60">
                {itemData.text} {/* Example breadcrumb data */}
              </a>
              <a href="#" className="">
                SEEDRA
              </a>
            </Breadcrumbs>
            <div>
              <div className="grid gap-4 w-[445px]">
                <div>
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
            <h1 className="text-[#1F2533] text-2xl font-semibold  mb-4 mt-[71px]">
              SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
              Planting
            </h1>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePrudact;
