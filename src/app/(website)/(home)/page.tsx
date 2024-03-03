import ScreenWrapper from "@/app/components/Layouts/ScreenWrapper";
import Header from "./Header";
import Navbar from "@/app/components/Layouts/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-[100vh]">
      <div className="relative h-full w-full  ">
        <div className="absolute   inset-0 -z-10 h-full w-full items-center px-5 py-24 xsm:[background:radial-gradient(125%_125%_at_50%_10%,#0F0F0F_50%,#030637_100%)] lg:[background:radial-gradient(125%_125%_at_50%_10%,#0F0F0F_10%,#030637_100%)] " />
        <div className=" w-full h-full   ">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#0F0F0F_70%,transparent_110%)]" />
          {/* <Navbar /> */}
          <ScreenWrapper>
            <Header />
          </ScreenWrapper>
        </div>
      </div>
      <div className="relative h-[100vh] w-full">
        {/* <div className="absolute   inset-0 -z-9 w-full h-[10vh] bg-[#381C82] blur-xl" /> */}
        <div className="absolute   inset-0 -z-10 h-full w-full items-center px-5 py-24 xsm:[background:radial-gradient(125%_125%_at_50%_90%,#0F0F0F_50%,#030637_100%)] lg:[background:radial-gradient(125%_125%_at_50%_90%,#0F0F0F_10%,#030637_100%)] " />

        <ScreenWrapper></ScreenWrapper>
      </div>
    </main>
  );
}
