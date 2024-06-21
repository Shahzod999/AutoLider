import Link from "next/link";
import "./personalArea.scss";
import "./rentedCars.scss";
import ModalAddCard from "@/components/userCard/modalAddCard/ModalAddCard";

export default function PersonalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="container">
        <div className="personalAreaMain">
          <aside>
            <Link href="/personalArea">
              <span>My details</span>
            </Link>
            <Link href="/personalArea/rent">
              <span>Rent</span>
            </Link>
            <Link href="/personalArea/leasing">
              <span>Leasing</span>
            </Link>
            <Link href="/personalArea/paymentCards">
              <span>Payment cards</span>
            </Link>
            <Link href="/personalArea/fines">
              <span>Fines</span>
            </Link>
            <Link href="/personalArea/subscriptions">
              <span>Subscriptions</span>
            </Link>
          </aside>
          <span className="border"></span>
          {children}
        </div>
      </main>
      <ModalAddCard />
    </>
  );
}
