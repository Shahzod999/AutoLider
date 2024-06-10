import Image from "next/image";
import styles from "./page.module.scss";
import Navigation from "@/components/navigation/Navigation";
import DescriptionHeader from "@/components/descriptionHeader/DescriptionHeader";

export default function Home() {
  return (
    <header>
      <Navigation />
      <DescriptionHeader />
    </header>
  );
}
