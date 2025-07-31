import { useState } from "react";
import Perks from "./Perks";

const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [photos, setPhotos] = useState("");
  const [description, setDescription] = useState("");
  const [extras, setExtras] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with:", { title, city, photos });
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8 px-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="ml-2 text-2xl font-bold">
          Título
        </label>
        <input
          id="title"
          type="text"
          placeholder="Digite o título do seu anúncio"
          className="rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="city" className="ml-2 text-2xl font-bold">
          Cidade e País
        </label>
        <input
          id="city"
          type="text"
          placeholder="Digite a cidade do seu anúncio"
          className="rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="photos" className="ml-2 text-2xl font-bold">
          Fotos
        </label>
        <div className="flex gap-4">
          <input
            id="photos"
            type="text"
            placeholder="Adicione o link da foto"
            className="grow rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600"
            value={photos}
            onChange={(e) => setPhotos(e.target.value)}
          />
          <button className="cursor-pointer rounded-full border border-gray-300 bg-gray-100 px-4 py-2 transition duration-300 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
            Enviar foto
          </button>
        </div>
        <div className="mt-2 grid grid-cols-5 gap-4">
          <label
            htmlFor="file"
            className="flex aspect-square cursor-pointer items-center justify-center gap-2 rounded-2xl border border-gray-300 dark:border-gray-600"
          >
            <input type="file" id="file" className="hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="ml-2 text-2xl font-bold">
          Descrição
        </label>
        <textarea
          id="description"
          placeholder="Descreva seu anúncio"
          className="h-56 resize-none rounded-2xl border border-gray-300 px-4 py-2 dark:border-gray-600"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="perks" className="ml-2 text-2xl font-bold">
          Comodidades
        </label>
        <Perks />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="extras" className="ml-2 text-2xl font-bold">
          Informações extras
        </label>
        <textarea
          id="extras"
          placeholder="Adicione informações extras sobre o seu anúncio"
          className="h-56 resize-none rounded-2xl border border-gray-300 px-4 py-2 dark:border-gray-600"
          value={extras}
          onChange={(e) => setExtras(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="ml-2 text-2xl font-bold">Restrições e Preço</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="ml-2 text-xl font-bold">
              Preço
            </label>
            <input
              id="price"
              type="number"
              placeholder="500"
              className="rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="checkin" className="ml-2 text-xl font-bold">
              Checkin
            </label>
            <input
              id="checkin"
              type="text"
              placeholder="16:00"
              className="rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="checkout" className="ml-2 text-xl font-bold">
              Checkout
            </label>
            <input
              id="checkout"
              type="text"
              placeholder="12:50"
              className="rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="guests" className="ml-2 text-xl font-bold">
              Nº de Convidados
            </label>
            <input
              id="guests"
              type="number"
              placeholder="5"
              className="rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="hover:bg-primary-600 bg-primary-400 min-w-44 cursor-pointer gap-2 rounded-full px-4 py-2 text-white transition duration-300 ease-in-out">
        Salvar Informações
      </button>
    </form>
  );
};

export default NewPlace;
