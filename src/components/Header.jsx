import logo from '../assets/images/logo.jpg'

export default function Header({show, setShow}) { 
  return (
    <div className='header'>
        <img src={logo} className='logo' alt="" />
        <p>@18</p>
        <h1>Stephanie</h1>
        <button onClick={() => setShow(!show)}>Click To Toggle Birthday Confetti</button>
    </div>
  )
}
