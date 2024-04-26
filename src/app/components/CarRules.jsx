export default function Rules(props) {
  return (
    <aside>
      <h1 class="font-bold text-xl pb-2">{props.num} {props.title}</h1>
      <section>
        {props.content}
      </section>
    </aside>
  );
}
