import './App.css'

// QR code image component
function Qrcodemage() {
  return(
    <div className="qrimage">
      <img src="../images/image-qr-code.png" alt="The QR code" />
    </div>
  )
}

// description component
function DescriptionOfQrCode({children}) {
  return(
    <div className='description'>
      {children}
    </div>
  )
}

function QrCodeCard() {
  return(
    <div className="codeQrCard">
        <Qrcodemage />
        <DescriptionOfQrCode>
          <h1>Improve your your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </DescriptionOfQrCode>
    </div>
  )
}

function App() {

  return (
    <>
     <div className="container">
      <QrCodeCard />
     </div>
    </>
  )
}

export default App
