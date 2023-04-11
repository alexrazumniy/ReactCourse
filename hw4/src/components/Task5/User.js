import { useToggle } from "./useToggler";

export const User = ({
  id,
  name,
  email,
  street,
  suite,
  city,
  phone,
  companyName
}) => {
  const [toggled, setToggled] = useToggle(false);
  return (
    <div className="user_info">
      <h4>{id}. {name}</h4>
      <button className="button" onClick={() => setToggled()}>
        {toggled ? "Hide details" : "See details"}
      </button>
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
