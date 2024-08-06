import { NewCourse } from '@/components/courses/NewCourse';

const page = () => {
  return (
    <div className="flex flex-col gap-8 h-[100%] px-4 md:px-0">
      <NewCourse />
    </div>
  );
};

export default page;
