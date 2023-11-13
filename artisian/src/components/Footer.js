import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4>API_Artisans</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero nec justo varius maximus.</p>
        </div>
        <div style={styles.linksColumn}>
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/link1">Link 1</a></li>
            <li><a href="/link2">Link 2</a></li>
            <li><a href="/link3">Link 3</a></li>
            <li><a href="/link4">Link 4</a></li>
          </ul>
        </div>
        <div style={styles.faqColumn}>
          <h4>FAQ</h4>
          {/* Repeat FAQ 4 times */}
          {Array.from({ length: 4 }, (_, index) => (
            <p key={index}>Frequently Asked Question #{index + 1}</p>
          ))}
        </div>
        <div style={styles.legalColumn}>
          <h4>Legal Terms</h4>
          {/* Repeat FAQ under Legal 4 times */}
          {Array.from({ length: 4 }, (_, index) => (
            <p key={index}>Legal FAQ #{index + 1}</p>
          ))}
        </div>
        <div style={styles.followUsColumn}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialIcons}>
            {/* Add icons of famous social websites with blue background */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" style={styles.icon} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" style={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram-icon.png" alt="Instagram" style={styles.icon} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img src="github-icon.png" alt="GitHub" style={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1 1 300px',
    margin: '0 20px',
  },
  linksColumn: {
    flex: '1 1 200px',
    margin: '0 20px',
  },
  faqColumn: {
    flex: '1 1 200px',
    margin: '0 20px',
  },
  legalColumn: {
    flex: '1 1 200px',
    margin: '0 20px',
  },
  followUsColumn: {
    flex: '1 1 200px',
    margin: '0 20px',
  },
  heading: {
    marginBottom: '10px',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
};

export default Footer;
