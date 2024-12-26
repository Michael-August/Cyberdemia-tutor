import { useForm } from 'react-hook-form';

import { Input } from '../inputs';

type FormValues = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  bio: string;
  language: string;
};

const Socials = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const submitForm = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit(submitForm)}
        noValidate
        className="mt-4 flex flex-col gap-5 lg:w-[70%]"
      >
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">
              Website (optional)
            </span>
            <Input
              className="w-full !p-3 !py-6 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="Enter URL"
              autoComplete="off"
              type="text"
              id="firstname"
              {...register('firstname', {
                required: 'First name is required',
              })}
            />
            {errors.firstname && (
              <p className="text-red-500 py-2 text-xs">
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">LinkedIn</span>
            <Input
              className="w-full !p-3 !py-6 text-xs focus:!outline-none focus:!ring-0 border !border-solid !bg-[#F5F5F5]"
              placeholder="Enter URL"
              autoComplete="off"
              type="text"
              id="lastname"
              {...register('lastname', {
                required: 'Last name is required',
              })}
            />
            {errors.lastname && (
              <p className="text-red-500 py-2 text-xs">
                {errors.lastname.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-[48%] flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">
              Twitter (optional)
            </span>
            <Input
              className="w-full text-xs !p-3 !py-6 focus:!outline-none focus:!ring-0 border !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="Enter URL"
              autoComplete="off"
              type="text"
              id="phone"
              {...register('phoneNumber', {
                required: 'Phone number is required',
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 py-2 text-xs">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>
        <button className="bg-cp-secondary w-full lg:w-[70%] text-sm mb-5 py-2 !text-white mt-8 hover:bg-cp-primary">
          Save changes
      </button>
      </form>
    </div>
  );
};

export default Socials;
