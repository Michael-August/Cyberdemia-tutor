'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { useTutorSignUp } from '@/hooks/react-query/useAuth';

import { genderOptions } from '../../../utils/constants';
import { Input } from '../inputs';
import { Label } from '../label';
import Loader from '../loader';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phoneNumber: string;
  state: string;
  password: string;
  confirmPassword: string;
  highestEducationLevel: string;
  degreeType: string;
  courseOfStudy: string;
  areaOfExpertise: string;
  degreeAttachment: string;
  cvAttachment: string;
  website: string;
  twitter: string;
  linkedIn: string;
  haveTaughtOnline: string;
  subjectsTaught: string;
  durationOfTeaching: string;
  teachingPhilosophy: string;
  courseProposalAttachment: string;
  declaration: boolean;
  termsAndConditions: boolean;
};

const SignupForm: React.FC = () => {
  const router = useRouter();
  const { mutate: TutorReg, isLoading } = useTutorSignUp(router);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const submitForm: SubmitHandler<FormValues> = (data) => {
    const { ...formData } = data;

    const payload = {
      ...formData,
      subjectsTaught: data.subjectsTaught
        .split(',')
        .map((subject) => subject.trim()),
    };

    TutorReg(payload);
    localStorage.setItem('temp', JSON.stringify(data.email));
  };

  const password = watch('password');

  return (
    <>
      {' '}
      {isLoading && <Loader />}
      <div className="w-full px-2 py-2 flex flex-col gap-10 h-full">
        <Image
          src={'/images/cyberdemiaLogo.svg'}
          width={200}
          height={200}
          alt={'cyberdemia logo'}
        />
        <div>
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-black py-2">
            Are you ready to share your expertise and inspire the next
            generation of learners? Sign up today on our innovative learning
            platform!
          </p>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          noValidate
          className="space-y-4"
        >
          {/* First and Last Name */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">
                First Name <span className="text-red-700">*</span>
              </Label>
              <Input
                className="w-full p-2"
                placeholder="First Name"
                type="text"
                id="firstName"
                {...register('firstName', {
                  required: 'First name is required',
                })}
              />
              {errors.firstName && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">
                Last Name <span className="text-red-700">*</span>
              </Label>
              <Input
                className="w-full p-2"
                placeholder="Last Name"
                type="text"
                id="lastName"
                {...register('lastName', {
                  required: 'Last name is required',
                })}
              />
              {errors.lastName && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email, Gender, and Phone Number */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="email">
                Email Address <span className="text-red-700">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                className="w-full p-2"
                placeholder="Email Address"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="gender">
                Gender <span className="text-red-700">*</span>
              </Label>
              <select
                id="gender"
                className="w-full p-2 border rounded-md"
                {...register('gender', {
                  required: 'Gender is required',
                })}
              >
                <option value="">Select Gender</option>
                {genderOptions.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.gender && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.gender.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phoneNumber">
                Phone Number <span className="text-red-700">*</span>
              </Label>
              <Input
                className="w-full p-2 border rounded-md"
                placeholder="Phone Number"
                type="text"
                id="phoneNumber"
                {...register('phoneNumber', {
                  required: 'Phone number is required',
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          {/* State and Highest Education Level */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="state">
                State <span className="text-red-700">*</span>
              </Label>
              <Input
                type="text"
                id="state"
                className="w-full p-2 border rounded-md"
                {...register('state', {
                  required: 'State is required',
                })}
              />
              {errors.state && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.state.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="highestEducationLevel">
                Highest Education Level <span className="text-red-700">*</span>
              </Label>
              <Input
                type="text"
                id="highestEducationLevel"
                className="w-full p-2 border rounded-md"
                {...register('highestEducationLevel', {
                  required: 'Highest education level is required',
                })}
              />
              {errors.highestEducationLevel && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.highestEducationLevel.message}
                </p>
              )}
            </div>
          </div>

          {/* Degree Type and Course of Study */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="degreeType">
                Degree Type <span className="text-red-700">*</span>
              </Label>
              <Input
                type="text"
                id="degreeType"
                className="w-full p-2 border rounded-md"
                {...register('degreeType', {
                  required: 'Degree type is required',
                })}
              />
              {errors.degreeType && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.degreeType.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="courseOfStudy">
                Course of Study <span className="text-red-700">*</span>
              </Label>
              <Input
                type="text"
                id="courseOfStudy"
                className="w-full p-2 border rounded-md"
                {...register('courseOfStudy', {
                  required: 'Course of study is required',
                })}
              />
              {errors.courseOfStudy && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.courseOfStudy.message}
                </p>
              )}
            </div>
          </div>

          {/* Area of Expertise */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-1 gap-4">
            <div>
              <Label htmlFor="areaOfExpertise">
                Area of Expertise <span className="text-red-700">*</span>
              </Label>
              <Input
                type="text"
                id="areaOfExpertise"
                className="w-full p-2 border rounded-md"
                {...register('areaOfExpertise', {
                  required: 'Area of expertise is required',
                })}
              />
              {errors.areaOfExpertise && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.areaOfExpertise.message}
                </p>
              )}
            </div>
          </div>

          {/* Degree Attachment and CV Attachment */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="degreeAttachment">
                Degree Attachment URL <span className="text-red-700">*</span>
              </Label>
              <Input
                type="url"
                id="degreeAttachment"
                className="w-full p-2 border rounded-md"
                {...register('degreeAttachment', {
                  required: 'Degree attachment URL is required',
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: 'Invalid URL',
                  },
                })}
              />
              {errors.degreeAttachment && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.degreeAttachment.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="cvAttachment">
                CV Attachment URL <span className="text-red-700">*</span>
              </Label>
              <Input
                type="url"
                id="cvAttachment"
                className="w-full p-2 border rounded-md"
                {...register('cvAttachment', {
                  required: 'CV attachment URL is required',
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: 'Invalid URL',
                  },
                })}
              />
              {errors.cvAttachment && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.cvAttachment.message}
                </p>
              )}
            </div>
          </div>

          {/* Website, Twitter, LinkedIn */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="website">
                Website URL <span className="text-red-700">*</span>
              </Label>
              <Input
                type="url"
                id="website"
                className="w-full p-2 border rounded-md"
                {...register('website', {
                  required: 'Website URL is required',
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: 'Invalid URL',
                  },
                })}
              />
              {errors.website && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.website.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="twitter">
                Twitter URL <span className="text-red-700">*</span>
              </Label>
              <Input
                type="url"
                id="twitter"
                className="w-full p-2 border rounded-md"
                {...register('twitter', {
                  required: 'Twitter URL is required',
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: 'Invalid URL',
                  },
                })}
              />
              {errors.twitter && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.twitter.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="linkedIn">
                LinkedIn URL <span className="text-red-700">*</span>
              </Label>
              <Input
                type="url"
                id="linkedIn"
                className="w-full p-2 border rounded-md"
                {...register('linkedIn', {
                  required: 'LinkedIn URL is required',
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: 'Invalid URL',
                  },
                })}
              />
              {errors.linkedIn && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.linkedIn.message}
                </p>
              )}
            </div>
          </div>

          {/* Teaching Experience */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="haveTaughtOnline">
                Have you taught online before?{' '}
                <span className="text-red-700">*</span>
              </Label>
              <select
                id="haveTaughtOnline"
                className="w-full p-2 border rounded-md"
                {...register('haveTaughtOnline', {
                  required: 'This field is required',
                })}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {errors.haveTaughtOnline && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.haveTaughtOnline.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="durationOfTeaching">
                Duration of Teaching <span className="text-red-700">*</span>
              </Label>
              <Input
                type="text"
                id="durationOfTeaching"
                className="w-full p-2 border rounded-md"
                {...register('durationOfTeaching', {
                  required: 'Duration of teaching is required',
                })}
              />
              {errors.durationOfTeaching && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.durationOfTeaching.message}
                </p>
              )}
            </div>
          </div>

          {/* Teaching Philosophy and Subjects Taught */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-1 gap-4">
            <div>
              <Label htmlFor="teachingPhilosophy">
                Teaching Philosophy <span className="text-red-700">*</span>
              </Label>
              <textarea
                id="teachingPhilosophy"
                className="w-full p-2 border rounded-md"
                {...register('teachingPhilosophy', {
                  required: 'Teaching philosophy is required',
                })}
              />
              {errors.teachingPhilosophy && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.teachingPhilosophy.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="subjectsTaught">
                Subjects Taught <span className="text-red-700">*</span>
              </Label>
              <Input
                type="text"
                id="subjectsTaught"
                className="w-full p-2 border rounded-md"
                {...register('subjectsTaught', {
                  required: 'Subjects taught is required',
                })}
              />
              {errors.subjectsTaught && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.subjectsTaught.message}
                </p>
              )}
            </div>
          </div>

          {/* Course Proposal Attachment */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-1 gap-4">
            <div>
              <Label htmlFor="courseProposalAttachment">
                Course Proposal Attachment URL{' '}
                <span className="text-red-700">*</span>
              </Label>
              <Input
                type="url"
                id="courseProposalAttachment"
                className="w-full p-2 border rounded-md"
                {...register('courseProposalAttachment', {
                  required: 'Course proposal attachment URL is required',
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: 'Invalid URL',
                  },
                })}
              />
              {errors.courseProposalAttachment && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.courseProposalAttachment.message}
                </p>
              )}
            </div>
          </div>
          {/* Password and Confirm Password */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password">
                Password <span className="text-red-700">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded-md"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long',
                    },
                  })}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="confirmPassword">
                Confirm Password <span className="text-red-700">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  className="w-full p-2 border rounded-md"
                  {...register('confirmPassword', {
                    required: 'Confirm Password is required',
                    validate: (value: string) =>
                      value === password || 'Passwords do not match',
                  })}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Declarations and Terms */}
          <div className="grid grid-cols-1 py-2 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="declaration">
                Declaration <span className="text-red-700">*</span>
              </Label>
              <input
                type="checkbox"
                id="declaration"
                className="ml-2 pt-5"
                {...register('declaration', {
                  required: 'You must declare to proceed',
                })}
              />
              {errors.declaration && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.declaration.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="termsAndConditions">Terms and Conditions</Label>
              <input
                type="checkbox"
                id="termsAndConditions"
                className="ml-2 pt-5"
                {...register('termsAndConditions', {
                  required: 'You must agree to the terms and conditions',
                })}
              />
              {errors.termsAndConditions && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.termsAndConditions.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full py-4 my-10 bg-cp-secondary text-white rounded-md hover:bg-cp-secondaryDarker transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
