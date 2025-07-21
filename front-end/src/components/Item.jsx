import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://projeto-booking.onrender.com/uploads/a90731aa-9a50-413d-bb4f-40cc4e869366-1741466753784.jpg"
        alt=""
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">sorocaba sp</h3>
        <p className="truncate text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          ipsam, accusamus corrupti veritatis rem modi ullam doloremque expedita
          animi velit saepe nihil excepturi deleniti suscipit quidem dignissimos
          eos, sapiente illo.
        </p>
      </div>
      <div>
        <p>
          <span className="font-semibold">R$550</span> por noite
        </p>
      </div>
    </a>
  );
};

export default Item;
