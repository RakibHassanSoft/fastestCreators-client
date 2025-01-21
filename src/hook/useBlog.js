import { useQuery } from '@tanstack/react-query';
import { getPublicData } from '../BcckendConnection/getData';

// Function to fetch the blogs with parameters
const fetchBlogs = async ({ queryKey }) => {
  const [{ search, filters, page, limit, sortField, sortOrder }] = queryKey;
//http://localhost:3000/api/v1/blogs/all-blog
  const params = new URLSearchParams({
    search: search || '',
    filters: JSON.stringify(filters || {}),
    page: page || 1,
    limit: limit || 10,
    sortField: sortField || 'createdAt',
    sortOrder: sortOrder || 'asc',
  });

  const { data } = await getPublicData(`/blogs/all-blog?${params.toString()}`);
  return data;
};

// Custom hook to fetch blogs with pagination, search, sorting, and filters
const useBlogs = ({ search, filters, page, limit, sortField, sortOrder }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blogs', { search, filters, page, limit, sortField, sortOrder }],
    queryFn: fetchBlogs,
    staleTime: 5 * 60 * 1000,  // Cache data for 5 minutes
    refetchOnWindowFocus: false,  // Disable refetching on window focus
  });

  return { data, isLoading, isError, error };
};

export default useBlogs;
