import Navigation from "@/components/navigation/Navigation";
import CatalogAll from "@/components/catalog/CatalogAll";
import Maps from "@/components/maps/Maps";

export default function Catalog() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="container">
        <CatalogAll />
      </main>
      <footer>
        <Maps />
      </footer>
    </>
  );
}
