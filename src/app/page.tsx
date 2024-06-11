import Image from "next/image";
import styles from "./page.module.scss";
import Navigation from "@/components/navigation/Navigation";
import DescriptionHeader from "@/components/descriptionHeader/DescriptionHeader";
import GreatOffer from "@/components/greatOffer/GreatOffer";
import Maps from "@/components/maps/Maps";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <DescriptionHeader />
      </header>
      <main>
        <GreatOffer />
      </main>
      <footer>
        <Maps />
      </footer>
    </>
  );
}
