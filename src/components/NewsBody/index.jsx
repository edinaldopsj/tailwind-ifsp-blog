import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

import Title from "../Title";

export default function NewsBody(props) {
  const { id } = props;

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [author, setAuthor] = useState("");

  const [commentary, setCommentary] = useState("");

  const loadNews = useCallback(() => {
    setTitle("Noticia Teste 1");
    setSubtitle("Subtitle");
    setAuthor("Fulano de Tal");
    setDescription(
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Deleniti facere libero ab! Rerum pariatur ad, dolores expedita sint 
      ratione eligendi nostrum libero nulla, modi, porro aliquid aut saepe 
      voluptas enim!`
    );
    setNewsDate(new Date().toLocaleString("pt-BR"));
    setLikes(Math.floor(Math.random() * 100));
    setDislikes(Math.floor(Math.random() * 100));
  }, []);

  useEffect(() => loadNews(), []);

  const handleCommentForm = (e) => {
    e.preventDefault();

    // TODO: add businness logic addComment here
  };

  return (
    <article className="shadow-lg bg-white text-justify w-full px-80 py-6 h-full">
      {/* Title, subtitle, author and date */}
      <Title title={title} />
      <h5 className="text-2xl text-center">{subtitle}</h5>
      <h5 className="text-gray-500 text-md text-center text-opacity-70 italic">
        {`por ${author}, em ${newsDate}`}
      </h5>

      {/* Like section */}
      <section className="flex justify-center my-2 gap-2">
        <HandThumbUpIcon className="h-6 w-6 text-gray-500 hover:text-green-500 cursor-pointer" />
        <span>{likes}</span>
        <HandThumbDownIcon className="h-6 w-6 text-gray-500 hover:text-red-500 cursor-pointer" />
        <span>{dislikes}</span>
      </section>

      {/* news by itself */}
      <section className="flex justify-center text-lg my-5">
        {description}
      </section>

      {/* Comments section */}
      <section>
        <form onSubmit={handleCommentForm}>
          <label htmlFor="commentary">Comentar</label>
          <textarea
            id="commentary"
            className="border-2 border-gray-300 rounded-md w-full resize-none"
            onChange={(e) => setCommentary(e.target.value)}
            rows={5}
            required
          />
          <div className="flex flex-row justify-between">
            <button type="button" className="px-4 border-2 hover:bg-gray-200">
              Cancelar
            </button>
            <button type="submit" className="px-4 border-2 hover:bg-gray-200">
              Enviar
            </button>
          </div>
        </form>

        {/* Comment list */}
        <section className="mt-8">
          {/* TODO: map db data here */}
          <section className="my-3">
            <header className="flex flex-row justify-between">
              <h5 className="text-bold text-lg">Fulano de Tal</h5>
              <h5>{new Date().toLocaleString("pt-BR")}</h5>
            </header>

            <p className="font-thin text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              eius consequuntur similique facere nam quasi quae veniam iure
              voluptatibus quaerat non, odio eaque at nobis! Eum repellendus
              velit debitis accusamus!
            </p>

            <footer className="flex flex-row-reverse gap-2">
              <button>Editar</button>
              <button>Excluir</button>
            </footer>
          </section>
        </section>
      </section>

      {/* Footer, back to previous page */}
      <footer className="flex justify-center py-3">
        <Link className="text-blue-400 no-underline" to="/">
          Voltar para o início
        </Link>
      </footer>
    </article>
  );
}
