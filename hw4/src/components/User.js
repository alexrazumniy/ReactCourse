import { useState } from "react";

const User = ({
  name, email, street, suite, city, phone, companyName
}) => {
  const [toggled, setToggled] = useState(false)

  const changeToggle = () => {
    setToggled(prev => !prev)
  }
  return (
    <div>
      <h4 onClick={changeToggle}>{name}</h4>
      {toggled && <>
      <p>Email: {email}</p>
      <p>Address: {street}, {suite}, {city}</p>
      <p>Phone: {phone}</p>
      <p>Company: {companyName}</p>
      </>}
    </div>
  );
};

export default User;
