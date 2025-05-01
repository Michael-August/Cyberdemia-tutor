import Image from 'next/image';

const AddedAssignment = ({ assignment }: { assignment: any }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-5">
        <div className="flex items-center justify-between border border-black px-4 py-2">
          <div className="flex items-center gap-4">
            <Image
              src={'/icons/book.svg'}
              alt="Document icon"
              width={24}
              height={24}
            />
            <span className="text-xs text-[#000000CC]">
              {assignment?.assignmentTitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedAssignment;
