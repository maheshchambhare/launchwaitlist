const ScreenWrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-[95%]  mMax:w-[80%] lMax:w-[70%] mx-auto ">
      {children}
    </div>
  );
};

export default ScreenWrapper;
