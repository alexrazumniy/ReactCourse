import User from "./User";
import Album from "./Album";
import { userData } from "./data/userData";
import { albumData } from "./data/albumData";

const Task1 = () => {
  return (
    <div>
      <h2>TASK #1</h2>
      <User
        name={userData.name}
        email={userData.email}
        street={userData.address.street}
        suite={userData.address.suite}
        city={userData.address.city}
        phone={userData.phone}
        companyName={userData.company.name}
      />
      <Album
        title={albumData.title}
        thumbnailUrl={albumData.thumbnailUrl}
      />
    </div>
  );
};

export default Task1;
