import "./styles.css";

import avatar from "./img/avatar.jpg";
import Logo from "./img/logo.jpg";
import Header from "./components/Header";

import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Image from "./components/Image";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo />

        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
