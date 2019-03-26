import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer-component">
      <div>
        wildmagic{' '}
        <a href="https://twitter.com/kenny_pizza" target="_blank">
          @kenny.wtf
        </a>{' '}
        2019
      </div>
      <div>
        <a href="https://github.com/wild-magic/Wild-Magic.git" target="_blank">
          github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
