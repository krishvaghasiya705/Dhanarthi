import Analyze from "@/components/homecomponents/analyzesection";
import Effortless from "@/components/homecomponents/effortlesssection";
import Faqsection from "@/components/homecomponents/faqsection";
import Homeherobanner from "@/components/homecomponents/herobanner";
import Ltsblogsection from "@/components/homecomponents/ltsblogsection";
import Ltsnewssection from "@/components/homecomponents/ltsnewssection";
import Makefinacedata from "@/components/homecomponents/makefinacedata";
import Oldnewsection from "@/components/homecomponents/oldnewsection";
import Smartinvestment from "@/components/homecomponents/smartinvestmentsection";
import Startwithsection from "@/components/homecomponents/startwithsection";
import Whychoosesection from "@/components/homecomponents/whychoosesection";

export default function Home() {
  return (
    <>
      <Homeherobanner />
      <Makefinacedata />
      <Smartinvestment />
      <Effortless />
      <Oldnewsection />
      <Whychoosesection />
      <Analyze />
      <Ltsnewssection />
      <Ltsblogsection />
      <Faqsection />
      <Startwithsection />
    </>
  );
}
