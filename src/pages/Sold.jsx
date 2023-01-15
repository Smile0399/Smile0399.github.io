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
      </div>
    </div>
  )
}
export default Sold
