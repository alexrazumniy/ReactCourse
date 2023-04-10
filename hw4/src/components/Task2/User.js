import { withFetchingData } from "./withFetchingData";

const User = ({
  id,
  username,
  email,
  street,
  suite,
  city,
  phone,
  companyName,
}) => {
  return (
    <div className="user_info">
      <h4>{id}. {username}</h4>
          <p>Email: {email}</p>
          <p>
            Address: {street}, {suite}, {city}
          </p>
          <p>Phone: {phone}</p>
          <p>Company: {companyName}</p>
    </div>
  );
};

export default withFetchingData(User);
