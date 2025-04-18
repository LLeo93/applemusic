import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepForward } from '@fortawesome/free-solid-svg-icons';

const FooterX = () => {
  return (
    <footer
      className="bg-dark text-white py-2 fixed-bottom d-lg-none"
      style={{
        zIndex: 1000,
        width: '95%',
        left: '50%',
        transform: 'translateX(-50%)',
        margin: '0 auto',
        borderRadius: '20px',
        boxShadow: '0px -6px 18px rgba(0, 0, 0, 0.6)',
        overflowX: 'hidden',
      }}
    >
      <div className="d-flex align-items-center justify-content-between px-3">
        {/* Logo Apple Music a sinistra */}
        <div className="d-flex align-items-center flex-grow-1">
          <img
            src="/logos/apple-music.png"
            alt="Apple Music Logo"
            style={{
              width: '36px',
              height: '36px',
              cursor: 'pointer',
            }}
          />
        </div>

        {/* Icone a destra */}
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faPlay}
            className="me-3"
            style={{
              color: '#808080',
              fontSize: '26px',
              cursor: 'pointer',
            }}
          />
          <FontAwesomeIcon
            icon={faStepForward}
            style={{
              color: '#808080',
              fontSize: '26px',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterX;
