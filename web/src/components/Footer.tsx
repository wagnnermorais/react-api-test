import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-8 bg-zinc-950 border-t">
      <p className="text-center font-semibold text-md text-purple-700">
        Made with a lot of coffee and love 💜☕
      </p>
      <p className="flex items-center gap-4">
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "#ffffff" }}
          size="2xl"
        />
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: "#ffffff" }}
          size="2xl"
        />
      </p>
    </footer>
  );
};

export default Footer;
