import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Session } from 'next-auth';
import { getSession, signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

import { baseUrl } from '../../utils/constants';

const client = axios.create({
  baseURL: baseUrl,
});

const shownErrors = new Set<string>();

export const request = async (config: AxiosRequestConfig): Promise<any> => {
  const user: Session | null | undefined = await getSession();
  try {
    if (user) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${user?.token}`,
      };
    }

    const response: AxiosResponse<any> = await client(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error;
      const { status, data } = axiosError.response || {};

      // Generate a unique key for the error message
      const errorKey = `${status}-${data?.message || 'Network Error'}`;

      // Check if the error has been shown already
      if (!shownErrors.has(errorKey)) {
        shownErrors.add(errorKey);

        // Show the error toast with user-friendly messages
        if (status === 401 || status === 403) {
          // return;
          toast.error(
            "It seems you're not authorized to perform this action. Please log in and try again.",
          );
          signOut();
          localStorage.clear();
          sessionStorage.clear();
        }
        if (status && status >= 400 && status < 500) {
          toast.error(data?.message || 'Error, try Again');
        }
        if (status && status >= 500) {
          toast.error(data?.message || 'Server Error, try Again');
        }
      }
    }

    throw error;
  }
};
