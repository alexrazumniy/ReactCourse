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
    <div className="user_info">
      <h3>User info</h3>
      <h4>{name}</h4>
      <button className="button" onClick={changeToggle}>{toggled ? "Hide details" : "See details"}</button>
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
