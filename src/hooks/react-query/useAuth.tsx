import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../request';

export const useStudentSignUp = (router: any) => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: '/student-signup',
        data,
      };

      // Send the request and handle response
      const responseData = await request(config);

      // Check if the response is successful using the 'status' field
      if (!responseData || responseData.status !== true) {
        // If not, throw an error to be caught by the onError callback
        throw new Error('Sign up failed!');
      }

      // If successful, return the response data
      return responseData;
    },
    {
      onSuccess: () => {
        toast.success('Sign up successful!'); // Notify user of success
        router.push('/otp'); // Navigate to OTP page
      },
    },
  );
};

export const useStudentOTP = (router: any) => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: '/verify-otp',
        data,
      };

      // Send the request and handle response
      const responseData = await request(config);

      // Check if the response is successful using the 'status' field
      if (!responseData || responseData.status !== true) {
        // If not, throw an error to be caught by the onError callback
        throw new Error('OTP verification failed!');
      }

      // If successful, return the response data
      return responseData;
    },
    {
      onSuccess: () => {
        toast.success('OTP verification successful!'); // Notify user of success
        router.push('/signin'); // Navigate to OTP page
        localStorage.clear();
        sessionStorage.clear();
      },
    },
  );
};

export const useStudentOTPResend = () => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: '/resend-otp',
        data,
      };

      // Send the request and handle response
      const responseData = await request(config);

      // Check if the response is successful using the 'status' field
      if (!responseData || responseData.status !== true) {
        // If not, throw an error to be caught by the onError callback
        throw new Error('OTP resend failed!');
      }
      // If successful, return the response data
      return responseData;
    },
    {
      onSuccess: () => {
        toast.success('OTP resend successful!');
      },
    },
  );
};

export const useStudentForgetPassword = () => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: '/forgot-password',
        data,
      };

      // Send the request and handle response
      const responseData = await request(config);

      // Check if the response is successful using the 'status' field
      if (!responseData || responseData.status !== true) {
        // If not, throw an error to be caught by the onError callback
        throw new Error('Forget password failed!');
      }
      // If successful, return the response data
      return responseData;
    },
    {
      onSuccess: () => {
        toast.success('Forget password successful!');
      },
    },
  );
};

export const useStudentPasswordReset = (router: any) => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: '/reset-password',
        data,
      };

      // Send the request and handle response
      const responseData = await request(config);

      // Check if the response is successful using the 'status' field
      if (!responseData || responseData.status !== true) {
        // If not, throw an error to be caught by the onError callback
        throw new Error('Password reset failed!');
      }
      // If successful, return the response data
      return responseData;
    },
    {
      onSuccess: () => {
        router.push('/signin'); // Navigate to OTP page
        toast.success('Password reset successful!');
      },
    },
  );
};
