import { Link } from "react-router-dom";
import PWU from "../assets/pwu.png";

interface Props {
  className: string;
}

const MapLogo = ({ className }: Props) => {
  return (
    <Link to="https://pwu.edu.ph" target="_blank">
      <img className={`img ${className}`} src={PWU} alt="PWU Logo" />
    </Link>
  );
};

export default MapLogo;
