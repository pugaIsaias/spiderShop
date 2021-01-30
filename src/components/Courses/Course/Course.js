import { NavLink } from "react-router-dom";

const course = (props) => {
  return (
    <li>
      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <NavLink to={props.link} exact>
        BUY
      </NavLink>
    </li>
  );
};

export default course;
