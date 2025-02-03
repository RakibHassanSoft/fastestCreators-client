import { useQuery } from '@tanstack/react-query';
import { getPublicData } from '../BcckendConnection/getData';

// Function to fetch the services
const fetchServices = async () => {
  const data = await getPublicData('/services/all');  // Correct endpoint to fetch all services
  return data;  // Return the fetched data
};

const useService = () => {
  const {
    data,        // Holds the fetched result
    isLoading,
    isError,
    error,
    refetch      // The refetch method to manually trigger data fetching
  } = useQuery({
    queryKey: ['services'],     // Unique key to prevent collision in the cache
    queryFn: fetchServices,     // Function to fetch data
    refetchOnWindowFocus: false, // Disable refetch when window regains focus
    refetchOnReconnect: false,   // Disable refetch when reconnecting to the internet
    refetchOnMount: false,       // Disable refetch when component mounts
    staleTime: Infinity,         // Data is considered fresh indefinitely
    cacheTime: Infinity          // Data is cached indefinitely
  });

  // Return the relevant data, states, and refetch function
  return { data, isLoading, isError, error, refetch };
};

export default useService;
