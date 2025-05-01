import Image from 'next/image';

const AddedExam = ({ exam }: { exam: any }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 mb-5">
          <div className="flex items-center justify-between border border-black px-4 py-2">
            <div className="flex items-center gap-4">
              <Image
                src={'/icons/document.svg'}
                alt="Document icon"
                width={24}
                height={24}
              />
              <span className="text-xs text-[#000000CC]">{exam?.fileName}</span>
            </div>
            <div className="flex items-center gap-4"></div>
          </div>
        </div>

        {/* <span className="flex gap-3 justify-start text-xs cursor-pointer items-center text-cp-secondary mt-3">
                                <Image
                                    src="/icons/plus.svg"
                                    width={20}
                                    height={20}
                                    alt="plus"
                                />
                                Add Article
                            </span> */}
      </div>
    </div>
  );
};

export default AddedExam;
