import Link from "next/link";
import Image from "next/image";

export default function Sign(props) {
  return (
    <section>
      <header>
        <h1 class="font-bold text-2xl">{props.num}. {props.title}</h1>
      </header>
      <Image src={props.src} width={500} height={500} alt={props.title} />
      <p>{props.content}</p>
    </section>
  );
}
