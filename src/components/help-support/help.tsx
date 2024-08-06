import { Label } from '../label';
import Breadcrumb from '../ui/breadcrumb';

const breadcrumbs = [
  {
    url: '/student/support',
    name: 'Help & Support',
  },
  {
    url: '',
    name: 'Get Support',
  },
];

const Help = () => {
  return (
    <div>
      <div className="breadcrumbs">
        <Breadcrumb breadcrumbsArray={breadcrumbs} />
      </div>
      <div className="help mt-8">
        <form className="w-full flex flex-col gap-6 lg:w-[80%]">
          <div className="form-group w-full flex flex-col gap-2">
            <Label className="text-sm text-[#000000CC]">
              Category of complaint
            </Label>
            <select className="w-full p-3 focus:outline-none focus:ring-0 border border-solid border-[#00000033] bg-[#F5F5F5]">
              <option value="" disabled selected>
                Select Type
              </option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
          <div className="form-group w-full flex flex-col gap-2">
            <Label className="text-sm text-[#000000CC]">
              Write a message regarding any complaint
            </Label>
            <textarea
              placeholder="Enter text (1000 characters)"
              className="w-full p-3 focus:outline-none focus:ring-0 border border-solid border-[#00000033] bg-[#F5F5F5]"
              maxLength={1000}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Help;
