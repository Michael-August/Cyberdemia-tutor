import { baseUrl } from '../../../../utils/constants';
import { request } from '../../../../utils/request';

export const updateAiiProfile = async (token: string, aiiProfileData: any) => {
  const res = await request('PUT', `${baseUrl}/v1/aii/profile`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: aiiProfileData,
  });

  return res;
};

export const applyForLabelingAii = async (token: string) => {
  const res = await request('POST', `${baseUrl}/v1/aii/label/applications`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

//get
export const getActiveNomination = async (token: string): Promise<any> => {
  try {
    const res = await fetch(`${baseUrl}/v1/nominations/categories/active`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (err) {
    return [];
  }
};

// how to use this code
// in the code where you wan to make the call

// import { useSession } from 'next-auth/react';
// const session = useSession();
// const token = session.data?.token;

// const {
//   mutateAsync,
//   isSuccess,
//   status,
//   data: aiiData
// } = useMutation({
//   mutationFn: () => applyForLabelingAii(token)
// });

// for get request

// const {
//   data: activeNominationData,
//   isFetching: isFetchingActiveNomination,
//   fetchStatus
// } = useQuery({
//   queryKey: ['activeNomination', token],
//   queryFn: () => getActiveNomination(token)
// });
