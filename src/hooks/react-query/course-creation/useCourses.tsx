import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../../request';

export const useGetCourses = () => {
  return useQuery(
    ['courses'],
    async () => {
      const config = {
        method: 'get',
        url: 'course',
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useGetCourse = (courseId: string) => {
  return useQuery(
    ['course', courseId],
    async () => {
      const config = {
        method: 'get',
        url: `course/${courseId}`,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
      enabled: !!courseId,
    },
  );
};

export const useCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: 'course',
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['courses']);
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useUpdateCourse = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: any) => {
      const config = {
        method: 'patch',
        url: `course/${courseId}`,
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['course', courseId]);
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useAddCertificationToCourse = () => {
  return useMutation(
    async (data: { courseId: string; signature: string; template: string }) => {
      try {
        const config = {
          method: 'post',
          url: 'certificate',
          data,
        };
        const responseData = await request(config);
        return responseData;
      } catch (error: any) {
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
  );
};

export const useGetCourseCertification = (courseId: string) => {
  return useQuery(
    ['certificate', courseId],
    async () => {
      const config = {
        method: 'get',
        url: `certificate/course/${courseId}`,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
      enabled: !!courseId,
    },
  );
};

export const useUpdateCourseCertificate = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: any) => {
      const config = {
        method: 'patch',
        url: `certificate/${courseId}`,
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['certificate', courseId]);
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useAddPriceToCourse = () => {
  return useMutation(
    async (data: { courseId: string; price: number; currency: string }) => {
      try {
        const config = {
          method: 'post',
          url: 'price',
          data,
        };
        const responseData = await request(config);
        return responseData;
      } catch (error: any) {
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
  );
};

export const useGetCoursePrice = (courseId: string) => {
  return useQuery(
    ['price', courseId],
    async () => {
      const config = {
        method: 'get',
        url: `price/course/${courseId}`,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
      enabled: !!courseId,
    },
  );
};

export const useUpdateCoursePrice = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: any) => {
      const config = {
        method: 'patch',
        url: `price/${courseId}`,
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['price', courseId]);
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useGetCourseStudents = (courseId: string) => {
  return useQuery(
    ['students', courseId],
    async () => {
      const config = {
        method: 'get',
        url: `subscription/course/${courseId}`,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
      enabled: !!courseId,
    },
  );
};

export const useIssueCert = (courseId: string) => {
  return useMutation(
    async (data: { studentId: string }) => {
      const config = {
        method: 'post',
        url: `/certificate/${courseId}/issued`,
        data,
      };

      const responseData = await request(config);
      return responseData;
    },
    {
      onSuccess: () => {
        toast.success('Certificate issued successfully');
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};
