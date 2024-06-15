import Navigation from "@/components/navigation/Navigation";
import Catalog from "../catalog/page";
import Maps from "@/components/maps/Maps";
import QuestionText from "./questionText/QuestionText";

export default function Questions() {
  return (
    <>
      <main className="container">
        <QuestionText />
      </main>
      <footer>
        <Maps />
      </footer>
    </>
  );
}
