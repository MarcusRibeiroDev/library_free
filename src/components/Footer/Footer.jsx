import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; Marcus Ribeiro 2024.</p>
      <div>
        <a href="https://github.com/MarcusRibeiroDev/library_free" target="_blank">
          <i className="bi bi-github px-4"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/marcus-dev-ribeiro?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
