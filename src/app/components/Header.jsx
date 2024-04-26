import Nav from "./Nav.jsx";
import Link from "next/link";

export default function Header(props) {
  return (
    <header>
      <Nav />
      <h1 class="font-bold text-4xl">{props.title}</h1>
      <p>{props.quote}</p>
      <p>
        <Link href="./home">
          <b>Traffic Rules in India</b>
        </Link>
        <Link href="./feedback.html">
          <i>Feedback</i>
        </Link>
      </p>
    </header>
  );
}
