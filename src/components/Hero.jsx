import React from 'react';

const Hero = () => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: 'url(/2M0A4026.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content">
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          {/* Main Title */}
          <h1 className="hero-title">
            PARADIGM CONSULTING
          </h1>

          {/* Established Text */}
          <p className="hero-subtitle">
            Established 2000
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 