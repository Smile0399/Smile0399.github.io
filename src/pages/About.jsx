const About = () => {
  return (
    <div>
      <div>
        <div style={{ height: '80px', color: '#fff' }}></div>
        <div
          style={{
            overflow: 'auto',
            backgroundColor: '#e6e6e6',
            height: '100vh'
          }}
        >
          <div
            style={{
              display: 'flex',
              paddingTop: '40px',
              paddingBottom: '20px',
              justifyContent: 'center',
              fontSize: '2rem'
            }}
          >
            About Me
          </div>
          <div
            style={{
              paddingTop: '10px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '2rem',
                borderTop: 'solid',
                borderColor: '#c0c0c0',
                width: 'calc(100% - 80px)',
                maxWidth: '1700px',
                justifyContent: 'center',
                paddingTop: '35px'
              }}
            >
              <div className='contact-container'>
                <div>
                  <div style={{ width: '250px', height: '250px' }}>
                    <img
                      style={{
                        borderRadius: '50%',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      src='Contact.jpg'
                      alt='KW LOGO'
                    />
                  </div>
                  <div style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                    Info Coming Soon!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
