import React from "react";
//import MainMenu from "./MainMenu";
import dog from "./images/dog.jpg";
import child from "./images/child.jpg";
import cat from "./images/cat.jpg";
import Parallax from "./Parallax";
//import { Container } from 'react-bootstrap';

//<Container>
//<MainMenu />
//</Container>

export default function App() {
  return (
    <div>
      <div className="parallax">
        <Parallax imageSrc={dog} imageAlt="Bleistiftporträt von einem Hund" >
          <h1 className="upperCase">Porträtstudio</h1>
          <h2>Wir malen ein Porträt von Ihrem Foto</h2>
        </Parallax>
        <Parallax imageSrc={cat} imageAlt="Pastelporträt von einer Katze" >
          <article>
            <h3>Tamara Martens</h3>
            <p>Sie sind auf der Suche nach einem sehr ausgefallenen Geschenk?
            Für Ihre Liebsten, Ihre Freunde und Bekannte? Wie wäre mit einer
            Original-Porträtzeichnung? Liebevoll handgezeichnete Porträts nach Ihrer
            Fotovorlage. Detaillierte und sorgfältige Arbeitsweise. Die exklusivste
            Geschenkidee für Hochzeiten, Weihnachten, zur Kommunion oder Konfirmation und viele
        andere Anlässe.</p>
          </article>
        </Parallax>
        <Parallax imageSrc={child} imageAlt="Bleistiftporträt von einem Jungen" >
          <article>
            <h3>Bleistift</h3>
            <p>Ein Bleistiftporträt wirkt durch tolle hell/dunkel Kontraste sehr zeitlos, edel und
              elegant. Durch die verschiedenen Härtegrade der Minen(Grautöne) kann man die glatte Haut von
          Menschen und auch jedes einzelne Tierhaar sehr gut auf das Papier bringen.</p>
          </article>
        </Parallax>
        <Parallax imageSrc={cat} imageAlt="Pastelporträt von einer Katze" >
          <article>
            <h3>Pastell</h3>
            <p>Pastell-Malerei ist eine wunderbare Mal-Technik um Menschen und Tierporträts anzugehen.
              Hierbei werden spezielle Kreiden und Pastellstifte verwendet. Man zeichnet mit Kreiden und
              hebt anschließend die Details mit Pastellstiften hervor. Sehr farbintensiv und realistisch.
          Sie zeichnet sich durch eine gewisse Lebendigkeit und Leuchtkraft aus.</p>
          </article>
        </Parallax>
      </div>
    </div>
  );
}
