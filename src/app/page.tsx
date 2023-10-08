import TopDataMobileComponent from "@/components/mobile/TopDataMobileComponent";
import TopDataComponent from "../components/TopDataComponent";
import BottomDataComponent from "@/components/BottomDataComponent";
import BottomDataMobileComponent from "@/components/mobile/BottomDataMobileComponent";

export default function Home() {
  return (
    <main className="">
      {/* mobile */}
      <TopDataMobileComponent />
      <BottomDataMobileComponent />

      {/* desktop */}
      <TopDataComponent />
      <BottomDataComponent />
    </main>
  );
}
