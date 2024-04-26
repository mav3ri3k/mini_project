import Header from "../components/Header.jsx";
import Main from "./Main.jsx";
export default function Page() {
  return (
    <>
      <Header
        class="text-center"
        title="Traffic Rules in India"
        quote="Obey the Signs, Avoid the Fines"
      />
      <Main />
    </>
  );
}
