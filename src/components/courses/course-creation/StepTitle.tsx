export const StepTitle = ({
  heading,
  desc,
}: {
  heading: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="title">
        <h1 className="text-base text-[#000000CC] font-bold">{heading}</h1>
      </div>
      <div className="desc">
        <p className="text-xs text-[#000000CC] leading-[24px]">{desc}</p>
      </div>
    </div>
  );
};
