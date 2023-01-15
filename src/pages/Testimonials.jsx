const Testimonials = () => {
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
          Testimonials
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
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '2rem',
              borderTop: 'solid',
              borderColor: '#c0c0c0',
              width: 'calc(100% - 80px)',
              maxWidth: '1700px',
              paddingTop: '35px',
              paddingBottom: '150px'
            }}
          >
            <div className='testimonial-container'>
              "Action, information, and results. Those were the characteristics
              that Pam, my realtor, provided in the sale of my residence.
              Selling for more than anticipated within three weeks, even though
              the house was off-market during the middle week for an estate
              sale. Pam is articulate, caring, and knows the real estate market.
              A lovely lady and very efficient"
              <div className='testimonial-signature'>~ Dave</div>
            </div>
            <div className='testimonial-container'>
              "Dear Prospective Homeowners: It is our immense pleasure to
              recommend Pam Taylor as a real estate agent for any individual or
              family searching for the ideal home for their unique situation. We
              were comfortable in our small home in Everett until we made the
              decision to return to CA where our family was located, and Pam
              assisted us in selling our home. Pam had an initial meeting with
              us and took diligent notes regarding the information about our
              home. She is highly talented technologically and made excellent
              use of her ability to communicate, create our listing and complete
              all documents and required questionnaires to sell our home. A
              master with the contract negotiations, Pam negotiated a deal that
              was good for us and made the buyer happy as well. Throughout this
              home selling process, she also managed to sell our house for an
              excellent price, especially in the current market situation. She
              knows the Everett and Mukilteo area like the back of her hand.
              There is nothing that escapes Pam’s attention when it comes to
              property in this area. We found Pam to be a highly attentive
              agent, almost as if we were her only customers, although we knew
              that was not the case. She returned all phone calls and emails the
              same day. We never felt neglected or unimportant. She is also
              highly personable with an engaging personality. Pam was honest
              about some minor changes that we needed to make in our house to
              attract buyers quickly, and her advice worked like a charm. I
              can’t say enough about Pam’s professionalism and knowledge within
              the industry. She has high integrity and is very conscientious and
              tenacious, always keeping the client’s best interests in mind. We
              are pleased to recommend Pam Taylor to anyone looking to buy or
              sell a home. She is hands down one of the best in the business in
              our opinion and we would recommend her as the first choice in real
              estate agents. "
              <div className='testimonial-signature'>~ Dave</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials
