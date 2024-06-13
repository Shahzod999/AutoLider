import Navigation from "@/components/navigation/Navigation";
import CatalogAll from "@/components/catalog/CatalogAll";
import Maps from "@/components/maps/Maps";

export default function Catalog() {
  return (
    <>
      <main className="container">
        <CatalogAll />
      </main>
      <footer>
        <Maps />
      </footer>
    </>
  );
}
