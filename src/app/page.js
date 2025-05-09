import Effortless from "@/components/homecomponents/effortlesssection";
import Homeherobanner from "@/components/homecomponents/herobanner";
import Makefinacedata from "@/components/homecomponents/makefinacedata";
import Oldnewsection from "@/components/homecomponents/oldnewsection";
import Smartinvestment from "@/components/homecomponents/smartinvestmentsection";

export default function Home() {
  return (
    <>
      <Homeherobanner />
      <Makefinacedata />
      <Smartinvestment />
      <Effortless />
      <Oldnewsection />
    </>
  );
}
