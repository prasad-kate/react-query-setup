import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  return {
    users: data,
  };
};
