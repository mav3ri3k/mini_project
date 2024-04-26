import Main from "./Main.jsx";
import Header from "../components/Header.jsx";

export default function Page() {
  return (
    <>
      <Header
        title="Feedback Form"
        quote="We all need people who will give us feedback"
      />
      <section>
        <Main />
      </section>
    </>
  );
}
