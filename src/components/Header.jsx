import DropDown from './DropDown'
import { Link } from 'react-router-dom'
import { Tooltip as ReactToolTip } from 'react-tooltip'

const Header = () => {
  return (
    <div
      id='navbar'
      style={{
        height: '80px',
        position: 'absolute',
        backgroundColor: '#fff'
      }}
    >
      <div
        style={{
          marginTop: '0px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '16px',
            paddingRight: '16px',
            height: '80px',
            left: '0'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link style={{ flexShrink: '1' }} to='/'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <img
                  src='KW_Logo.webp'
                  style={{ width: '100px', height: '48px' }}
                  alt='KW LOGO'
                />
              </div>
            </Link>
          </div>
          <div>{/*placeholder for spacing*/}</div>
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              lineHeight: '1.5',
              color: '#343342',
              fontWeight: '600',
              fontSize: '16px'
            }}
          >
            <DropDown title='Listings' options={['Active', 'Sold']} />
            &nbsp;
            <DropDown
              title='Pam Taylor'
              options={['About', 'Testimonials', 'Contact']}
            />
            &nbsp;
            <Link id='login-link' className='login-link' to='/Login'>
              <i className={`fa-solid fa-sign-in`}></i>
            </Link>
            <ReactToolTip
              anchorId='login-link'
              place='bottom'
              content='Login'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
