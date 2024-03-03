import Button from "@/app/components/ui/Button";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { LayoutGrid } from "@/app/components/ui/layout-grid";

const Header = () => {
  return (
    <div className="h-[100vh] w-full pt-[40px]    relative flex  items-center justify-between ">
      <div className="w-full xl:w-[60%] 2xl:w-[50%] mx-auto ">
        <Spotlight
          className="-top-40 -left-20 md:left-60 md:-top-10"
          fill="grey"
        />
        <h1
          className="text-textPrimary text-center  font-mont font-bold 
          xsm:text-[25px] xsm:leading-[30px]
        md:text-[35px] md:leading-[40px]
        lg:text-[45px] lg:leading-[50px]
        xl:text-[50px] xl:leading-[65px]
        2xl:text-[72px] 2xl:leading-[80px]
        "
        >
          Your Gateway to Quick Knowledge
        </h1>

        <p
          className="text-textSecondary font-poppins font-normal  mt-2
          text-center
        sm:text-[12px] sm:leading-[20px]
        md:text-[15px] md:leading-[23px]
        lg:text-[20px] lg:leading-[28px]
        xl:text-lg xl:leading-6 
        2xl:text-xl 2xl:leading-8 

        "
        >
          Explore concise summaries tailored to fit your busy lifestyle. Dive
          into our curated collection and unlock the power of quick knowledge
          with Briefology.
        </p>
        <div className="mt-4 max-w-max  mx-auto mMax:ml-0">
          <Button title="Get Access" />
        </div>
      </div>
      <div className="hidden mMax:flex h-[90%] w-[50%]  ">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
};

export default Header;

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Zero to One</p>
      <p className="font-normal text-base text-white">
        Notes on Start Ups, or How to Build the Future
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Atomic Habits</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        ATOMIC HABITS: An Easy & Proven Way to Build Good Habits & Break Bad
        Ones
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">The 4-Hour Work Week</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Escape the 9-5, Live Anywhere and Join the New Rich
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Sapiens</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Interesting and provocative... It gives you a sense of how briefly we've
        been on this Earth
      </p>
    </div>
  );
};
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://books.google.com/books/content?id=M22fAwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&source=gbs_api"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://books.google.com/books/content?id=fFCjDQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&source=gbs_api"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://books.google.com/books/content?id=tQ1C-rvAfJUC&printsec=frontcover&img=1&zoom=4&edge=curl&source=gbs_api"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://books.google.com/books/content?id=1EiJAwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&source=gbs_api"
  }
];
