import { User } from "./User";
import { useFetch } from "./useFetch";
const USERS_BASE_URL = "https://jsonplaceholder.typicode.com/users?_limit=5";

export const Users = () => {
  const { data: users, loading, error } = useFetch(USERS_BASE_URL);
  return (
    <div>
      {loading && <div>Loader...</div>}
      {error && !loading && <div>Error: {error}</div>}
      {!error &&
        !loading &&
        users?.map((user) => (
          <User
            {...user}
            key={user.id}
            id={user.id}
            username={user.username}
            email={user.email}
            street={user.address.street}
            suite={user.address.suite}
            city={user.address.city}
            phone={user.phone}
            companyName={user.company.name}
          />
        ))}
    </div>
  );
};
