import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const heroStyle = {
  textAlign: 'center',
  height: '60vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};

const linksStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
};

function Index() {
  return (
    <main>
      <div style={heroStyle}>
        <h1 className="hero" style={{ marginTop: '20%' }}>
          Wild Magic
        </h1>
        <p>Games, but like for 2019</p>
        <div style={linksStyle}>
          <Link href="/game-engine">
            <a>Game Engine (1.0.0-alpha.13)</a>
          </Link>
          <a href="https://dungeon.wildmagic.io" target="_blank">
            Dungeoneering Demo (1.0.0-alpha.10)
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Index;
