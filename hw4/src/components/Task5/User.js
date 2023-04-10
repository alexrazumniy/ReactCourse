export const User = ({
  id,
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
      <h4>{id}. {name}</h4>
      <p>Email: {email}</p>
      <p>
        Address: {street}, {suite}, {city}
      </p>
      <p>Phone: {phone}</p>
      <p>Company: {companyName}</p>
    </div>
  );
};
