'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import { Label } from '../label';
import ProfileForm from './profileForm';
import ResetPasswordForm from './resetpasswordForm';
import Socials from './socials';

const Profile = () => {
  const [tab, setTab] = useState('edit');
  const [profileImage, setProfileImage] = useState<any>(null);

  const profileData = sessionStorage.getItem('userProfile');

  const switchTab = (newTab: string) => {
    setTab(newTab);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="top flex flex-col gap-8 border-b-[1px]  border-[#00000099] pb-4">
        <div className="img-name flex items-center gap-4 md:gap-8">
          {/* <Image className='hidden md:block rounded-[50%]' src="/images/profile-pic.png" width={150} height={150} alt='profile picture' />
                <Image className='md:hidden rounded-[50%]' src="/images/profile-pic.png" width={102} height={102} alt='profile picture' /> */}
          <div className="w-[6.375rem] flex items-center justify-center h-[6.375rem] md:w-[9.25rem] md:h-[9.25rem] rounded-[50%] border border-solid">
            {!profileImage && (
              <span className="text-[3.1875rem] md:text-[4.625rem] font-bold text-cp-secondary">
                J
              </span>
            )}
            {profileImage && (
              <Image
                src={profileImage}
                alt={'Profile Image'}
                className="w-[inherit] h-[inherit] rounded-[50%]"
                width={0}
                height={0}
              />
            )}
          </div>
          <div className="name-email flex flex-col gap-1">
            <span className="text-base font-bold">
              {profileData && JSON.parse(profileData).fullName}
            </span>
            <span className="text-xs text-[#000000CC]">
              {profileData && JSON.parse(profileData).email}
            </span>
          </div>
        </div>
        <input
          type="file"
          name=""
          hidden
          id="profile-image"
          onChange={handleImageChange}
        />
        <Label
          htmlFor="profile-image"
          className="w-fit h-10 px-4 cursor-pointer py-2 text-[10px] !bg-cp-secondary !text-white flex items-center gap-1"
        >
          Upload Image
          <Image src="/images/camera.svg" width={18} height={24} alt="camera" />
        </Label>
      </div>

      <div className="tabs flex items-center gap-5 mt-4">
        <div
          className={`tab relative cursor-pointer px-4 py-2 rounded ${tab === 'edit' ? 'active !bg-cp-secondary text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => switchTab('edit')}
        >
          <span className="text-[16px] font-bold">Edit Profile</span>
        </div>
        <div
          className={`tab relative cursor-pointer px-4 py-2 rounded ${tab === 'socials' ? 'active !bg-cp-secondary text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => switchTab('socials')}
        >
          <span className="text-[16px] font-bold">Socials</span>
        </div>
        <div
          className={`tab relative cursor-pointer px-4 py-2 rounded ${tab === 'password' ? 'active !bg-cp-secondary text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => switchTab('password')}
        >
          <span className="text-[16px] font-bold">Change Password</span>
        </div>
      </div>
      <div className="flex flex-col gap-16 mt-8">
        {tab === 'edit' && <ProfileForm />}
        {tab === 'socials' && (
          <div>
            <span className="text-[16px] font-bold">Socials</span>
            <Socials />
          </div>
        )}
        {tab === 'password' && (
          <div>
            <span className="text-[16px] font-bold">Change Password</span>
            <ResetPasswordForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
