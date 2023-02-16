import { Container, Image } from "react-bootstrap";
import reactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <Container>
      <Image src={reactLogo} width="250px" />
    </Container>
  );
};

export default Header;
