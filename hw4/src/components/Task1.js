import User from "./User";
import { userData } from "../data/userData";

const Task1 = () => {
  return (
    <div>
      <h3>Task 1</h3>
      <User
        name={userData.name}
        email={userData.email}
        street={userData.address.street}
        suite={userData.address.suite}
        city={userData.address.city}
        phone={userData.phone}
        companyName={userData.company.name}
      />
    </div>
  );
};

export default Task1;
