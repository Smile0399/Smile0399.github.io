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
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '250px',
                      height: '250px'
                    }}
                  >
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
                    I was born and raised in Oklahoma, but have had the
                    opportunity to live in various parts of the United States,
                    including Hawaii and Guam, before finally settling in
                    Washington state in 1996. I am a long-time resident of "Old
                    Town" Mukilteo, where I live with my husband Tim, who has
                    deep roots in the community. Together, we enjoy traveling,
                    boating, gardening, and spending time with our family and
                    friends. We have three adult children, a daughter-in-law,
                    son-in-law, and four wonderful grandchildren. Additionally,
                    we have a beloved Australian Shepherd named Sydney.
                    <br />
                    <br />
                    After a successful career as a chairside dental assistant, I
                    decided to embark on a new professional journey in real
                    estate. I passed my real estate exam in May 2007 and joined
                    a boutique brokerage firm, where I gained valuable knowledge
                    and experience. In 2012, I transferred my license to Keller
                    Williams Everett and joined my husband, who was a commercial
                    real estate broker at the time.
                    <br />
                    <br />
                    In addition to my professional pursuits, I am an active and
                    dedicated member of the Mukilteo community, having been
                    involved with the local Kiwanis Club since 2002. I have
                    served on the board of directors and held the position of
                    fundraising chairperson. My efforts have been recognized by
                    the community, and I was honored with the Mukilteo Kiwanis
                    Member of the Year award in 2016 and the Mukilteo Citizen of
                    the Year award in 2017.
                    <br />
                    <br />
                    As a realtor, I am passionate about assisting my clients in
                    the buying and selling process and building lasting
                    relationships with them. My goal is to always conduct myself
                    with integrity, kindness, patience, and a genuine care for
                    their needs.
                  </div>
                </div>
              </div>
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
    </div>
  )
}
export default About
