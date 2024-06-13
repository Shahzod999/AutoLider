import DescriptionHeader from "@/components/descriptionHeader/DescriptionHeader";
import GreatOffer from "@/components/greatOffer/GreatOffer";
import Maps from "@/components/maps/Maps";

export default function Home() {
  return (
    <>
      <main>
        <DescriptionHeader />
        <GreatOffer />
      </main>
      <footer>
        <Maps />
      </footer>
    </>
  );
}
