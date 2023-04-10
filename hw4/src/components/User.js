import { withToggler } from "../HOCs/withToggler";

const User = ({
  name,
  email,
  street,
  suite,
  city,
  phone,
  companyName,
  toggled,
  changeToggle,
}) => {
  return (
    <div>
      <hr />
      <h3>User info</h3>
      <h4 onClick={changeToggle}>{name}</h4>
      {toggled && (
        <>
          <p>Email: {email}</p>
          <p>
            Address: {street}, {suite}, {city}
          </p>
          <p>Phone: {phone}</p>
          <p>Company: {companyName}</p>
        </>
      )}
    </div>
  );
};

export default withToggler(User);
