import SoldGrid from '../components/SoldGrid'

const Sold = () => {
  return (
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
          Closings
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
            <SoldGrid />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '150px',
            paddingBottom: '150px'
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
                License #98047
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '25px'
              }}
            >
              <div style={{ margin: '15px' }}>Pam Taylor</div>
              <div style={{ margin: '15px' }}>
                <i className='fa-solid fa-phone'></i>
                <span>&nbsp;&nbsp;Phone 1-425-530-1128</span>
              </div>
              <div style={{ margin: '15px', whiteSpace: 'nowrap' }}>
                <i className='fa-solid fa-envelope'></i>
                <span>&nbsp;&nbsp;Pamtaylor.kw@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sold
