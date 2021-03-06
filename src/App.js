import React from "react";
import MainMenu from "./MainMenu";
import dog from "./images/dog.jpg";
import child from "./images/child.jpg";
import cat from "./images/cat.jpg";
import Parallax from "./Parallax";
import Article from "./Article";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <MainMenu />
      <Parallax imageSrc={dog} imageAlt="Bleistiftporträt von einem Hund" darkFooter={true} >
        <Link to="/" className="footer padding_big site_title">
          <h1 className="upper_case site_title">Porträtstudio</h1>
          <h2 className="site_description">Wir malen ein Porträt von Ihrem Foto</h2>
        </Link>
      </Parallax>
      <Parallax imageSrc={cat} imageAlt="Pastelporträt von einer Katze" >
        <Article header="Tamara Martens">
          Sie sind auf der Suche nach einem sehr ausgefallenen Geschenk?
          Für Ihre Liebsten, Ihre Freunde und Bekannte? Wie wäre mit einer
          Original-Porträtzeichnung? Liebevoll handgezeichnete Porträts nach Ihrer
          Fotovorlage. Detaillierte und sorgfältige Arbeitsweise. Die exklusivste
          Geschenkidee für Hochzeiten, Weihnachten, zur Kommunion oder Konfirmation und viele
          andere Anlässe.
        </Article>
      </Parallax>
      <Parallax imageSrc={child} imageAlt="Bleistiftporträt von einem Jungen" >
        <Article header="Bleistift">
          Ein Bleistiftporträt wirkt durch tolle hell/dunkel Kontraste sehr zeitlos, edel und
          elegant. Durch die verschiedenen Härtegrade der Minen(Grautöne) kann man die glatte Haut von
          Menschen und auch jedes einzelne Tierhaar sehr gut auf das Papier bringen.
        </Article>
      </Parallax>
      <Parallax imageSrc={cat} imageAlt="Pastelporträt von einer Katze" >
        <Article header="Pastell">
          Pastell-Malerei ist eine wunderbare Mal-Technik um Menschen und Tierporträts anzugehen.
          Hierbei werden spezielle Kreiden und Pastellstifte verwendet. Man zeichnet mit Kreiden und
          hebt anschließend die Details mit Pastellstiften hervor. Sehr farbintensiv und realistisch.
          Sie zeichnet sich durch eine gewisse Lebendigkeit und Leuchtkraft aus.
        </Article>
      </Parallax>
    </div>
  );
}
