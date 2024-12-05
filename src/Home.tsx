import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-colorbackground">
      <Header />
      <Card />
    </div>
  );
}
