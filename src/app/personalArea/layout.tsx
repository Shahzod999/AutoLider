import Aside from "@/components/personalArea/aside/Aside";
import "./personalArea.scss";
import "./rentedCars.scss";
import ModalAddCard from "@/components/userCard/modalAddCard/ModalAddCard";
import PressIcon from "@/components/personalArea/pressIcon/PressIcon";

export default function PersonalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="container">
        <div className="personalAreaMain">
          <Aside />
          <span className="border"></span>
          {children}
        </div>
      </main>
      <ModalAddCard />
    </>
  );
}
