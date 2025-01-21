//http://localhost:3000/api/v1/users

import { useQuery } from '@tanstack/react-query';
import { getPublicData } from '../BcckendConnection/getData';

// Function to fetch the users
const fetchUsers = async () => {
  const data = await getPublicData('/users');  // Correct endpoint to fetch all gigs
  return data;  // Return the fetched data
};

const useUsers = () => {
  const {
    data,  // `data` will hold the fetched result
    isLoading,
    isError,
    error,
    refetch

  } = useQuery({
    queryKey: ['users'],  // Unique key to prevent collision in the cache
    queryFn: fetchUsers,  // Function to fetch data
    staleTime: 5 * 60 * 1000,  // Cache for 5 minutes before refetching
    refetchOnWindowFocus: false,  // Disable refetch when window regains focus
  });

  // Return the relevant data and states
  return { data, isLoading, isError, error,refetch  };
};

export default useUsers;
