import { useQuery } from '@tanstack/react-query';
import { postPublicData } from '../BcckendConnection/postData';
import useAuth from '../hooks/useAuth';

// Function to fetch admin data by email
const fetchAdminData = async (email) => {
  if (!email) {
    throw new Error('User email is missing or not authenticated');
  }

  const endpoint = `/users/check-admin?email=${email}`; // Correct endpoint
  const res = await postPublicData(endpoint); // Make the API call
//  console.log(res)
  return res; // Return the result
};

// Custom hook to check if the user is an admin
const useAdmin = () => {
  const { user, loading: authLoading } = useAuth();
  // console.log(user)
  const { data, isLoading: queryLoading, isError, error } = useQuery({
    queryKey: ['admin', user?.email], // Include email in the cache key
    queryFn: () => fetchAdminData(user?.email), // Fetch function with email
    enabled: !authLoading && !!user?.email, // Ensure auth is loaded and email is available
    staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
    retry: 2, // Retry on failure up to two times
    refetchOnWindowFocus: false, // No refetch on focus
  });

  // Combine loading states from useAuth and React Query
  const loading = authLoading || queryLoading;

  // console.log(data)
  return { data, loading, isError, error };
};

export default useAdmin;
