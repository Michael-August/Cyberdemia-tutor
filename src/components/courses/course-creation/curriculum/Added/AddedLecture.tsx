import { Label } from '@/components/ui/label';
import Image from 'next/image';

const AddedLecture = ({ lecture }: { lecture: any }) => {
  return (
    <div>
      {lecture.lectureLength && (
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="video-details flex items-center gap-3">
              <Image
                src={'/images/thumbnail.svg'}
                alt="Video Thumbnail"
                width={147}
                height={95.42}
              />
              <div className="details flex flex-col gap-2">
                <span className="text-xs text-[#00000099]">
                  {lecture?.lectureTitle}.mp4
                </span>
                <span className="text-xs text-[#00000099]">
                  {Number(lecture?.lectureLength)} minuites
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {!lecture.lectureLength && (
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 mb-5">
            <Label
              className="text-xs text-[#000000CC] font-semibold"
              htmlFor="videoTitle"
            >
              Article Title
            </Label>
            <div className="flex items-center justify-between border border-black px-4 py-2">
              <div className="flex items-center gap-4">
                <Image
                  src={'/icons/document.svg'}
                  alt="Document icon"
                  width={24}
                  height={24}
                />
                <span className="text-xs text-[#000000CC]">
                  {lecture?.lectureTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddedLecture;
