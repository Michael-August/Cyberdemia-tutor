import { Label } from '../label';
import Breadcrumb from '../ui/breadcrumb';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';

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
            <Select>
              <SelectTrigger className="w-full !p-3 !focus:outline-none !focus:ring-0 !border border-solid !border-[#00000033] bg-[#F5F5F5]">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="form-group w-full flex flex-col gap-2">
            <Label className="text-sm text-[#000000CC]">
              Write a message regarding any complaint
            </Label>
            <Textarea
              placeholder="Enter text (1000 characters)"
              className="w-full !p-3 !focus:outline-none !focus:ring-0 !border border-solid !border-[#00000033] bg-[#F5F5F5]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Help;
