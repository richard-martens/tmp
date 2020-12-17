import React from "react";
import MainMenu from "./MainMenu";
import dog from "./images/dog.jpg";
import Parallax from "./Parallax";

export default function App() {
  return (
    <div>
      <MainMenu />
      <Parallax imageSrc={dog} imageAlt="Bleistiftporträt von einem Hund" >
        <article>
          <h2>Tamara Martens</h2>
          <p>Sie sind auf der Suche nach einem sehr ausgefallenen Geschenk?
          Für Ihre Liebsten, Ihre Freunde und Bekannte? Wie wäre mit einer
          Original-Porträtzeichnung? Liebevoll handgezeichnete Porträts nach Ihrer
          Fotovorlage. Detaillierte und sorgfältige Arbeitsweise. Die exklusivste
          Geschenkidee für Hochzeiten, Weihnachten, Kommunion oder Konfirmation und viele
        andere Anlässe.</p>
        </article>
      </Parallax>
      <article>
        <h2>Bleistift</h2>
        <p>Ein Bleistiftporträt wirkt durch tolle hell/dunkel Kontraste sehr zeitlos, edel und
          elegant. Durch die verschiedenen Härtegrade der Minen(Grautöne) kann man die glatte Haut von
          Menschen und auch jedes einzelne Tierhaar sehr gut auf das Papier bringen.</p>
      </article>
      <article>
        <h2>Pastell</h2>
        <p>Pastell-Malerei ist eine wunderbare Mal-Technik um Menschen und Tierporträts anzugehen.
          Hierbei werden spezielle Kreiden und Pastellstifte verwendet. Man zeichnet mit Kreiden und
          hebt anschließend die Details mit Pastellstiften hervor. Sehr farbintensiv und realistisch.
          Sie zeichnet sich durch eine gewisse Lebendigkeit und Leuchtkraft aus.</p>
      </article>
    </div>
  );
}
