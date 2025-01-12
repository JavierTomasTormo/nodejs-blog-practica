import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Javier Tomás Tormo - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className="hero">
          <h1 className="title">Javier Tomás Tormo</h1>
          <p className="description">
            Full Stack Developer
          </p>
          <div className="subtitle">Transformando ideas en soluciones digitales</div>
        </div>

        <div className="grid">
          <a href="https://github.com/JavierTomasTormo/Proyecto-Final-Bootcamp" className="card">
            <div className="card-content">
              <h3>Proyecto Final Bootcamp</h3>
              <p>Proyecto final del bootcamp de desarrollo web full stack.</p>
              <span className="card-arrow">→</span>
            </div>
          </a>

          <a href="https://github.com/JavierTomasTormo/Proyecto-Grupal" className="card">
            <div className="card-content">
              <h3>Proyecto Grupal</h3>
              <p>Proyecto colaborativo desarrollado en equipo.</p>
              <span className="card-arrow">→</span>
            </div>
          </a>

          <a href="https://github.com/JavierTomasTormo/Proyecto-Individual" className="card">
            <div className="card-content">
              <h3>Proyecto Individual</h3>
              <p>Proyecto personal mostrando habilidades individuales.</p>
              <span className="card-arrow">→</span>
            </div>
          </a>

          <a href="https://github.com/JavierTomasTormo" className="card">
            <div className="card-content">
              <h3>Mi GitHub</h3>
              <p>Visita mi perfil de GitHub para ver más proyectos.</p>
              <span className="card-arrow">→</span>
            </div>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/JavierTomasTormo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por Javier Tomás Tormo
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(to bottom, #f8f9fa, #ffffff);
        }

        main {
          padding: 4rem 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero {
          text-align: center;
          margin-bottom: 4rem;
        }

        footer {
          width: 100%;
          padding: 2rem 0;
          border-top: 1px solid rgba(0,0,0,0.1);
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          align-items: center;
          color: #666;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        footer a:hover {
          color: #0070f3;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #0070f3, #00a6ed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 1.8rem;
          color: #444;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #666;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
          margin-top: 3rem;
        }

        .card {
          background: #ffffff;
          border-radius: 15px;
          padding: 2rem;
          text-decoration: none;
          border: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .card-content {
          position: relative;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0,0,0,0.1);
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
        }

        .card p {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #666;
        }

        .card-arrow {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 1.5rem;
          color: #0070f3;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover .card-arrow {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 3rem;
          }

          .description {
            font-size: 1.5rem;
          }

          .grid {
            padding: 0 1rem;
          }

          .card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        ::selection {
          background: #0070f3;
          color: white;
        }
      `}</style>
    </div>
  );
}
