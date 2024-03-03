import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-6 bg-zinc-950 border-t">
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/wagnermorais/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ffffff" }}
            size="2xl"
          />
        </a>
        <a href="https://github.com/wagnnermorais" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#ffffff" }}
            size="2xl"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
