import Main from "./main.jsx";
import Header from "../components/Header.jsx";
import TrafficQuiz from "./Quiz.jsx";

export default function Page() {
  return (
    <>
      <Header title="Quiz" quote="No belt, no excuse" />
      <TrafficQuiz />
    </>
  );
}
