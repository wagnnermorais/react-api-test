import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-8 bg-zinc-950 border-t">
      <p className="text-center font-semibold text-md text-purple-700">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/wagnermorais/"
          target="_blank"
          className="text-purple-500 duration-300 hover:text-purple-200"
        >
          Wagner Morais
        </a>{" "}
        with a lot of coffee and love 💜☕
      </p>
      <p className="flex items-center gap-4">
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
      </p>
    </footer>
  );
};

export default Footer;
