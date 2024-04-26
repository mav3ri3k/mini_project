import Link from "next/link";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="../home">Home</Link>
        </li>
        <li>
          <a href="./signs">Important Signs</a>
        </li>
        <li>
          <Link href="./lights">Lights Example</Link>
        </li>
        <li>
          <Link href="../quiz">Quiz</Link>
        </li>
        <li>
          <Link href="./feedback.html">Feedback</Link>
        </li>
        <li>
          <Link href="./login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
