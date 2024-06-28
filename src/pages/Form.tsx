
import userIcon from '../assets/user.svg'
import keyIcon from '../assets/key.svg'

export function Form () {
  return (
    <div className="forms">
    <form className="sign-in">
      <h2 className="heading">Sign In</h2>
      <p className="desc">Sign in to get the most out of nuntium.</p>
      <div className="input-wrapper">
        <div className="input-box">
          <img src={userIcon} alt="userIcon" />
          <input type="text" placeholder='Username' />
        </div>
        <div className="input-box">
          <img src={keyIcon} alt="keyIcon" />
          <input type="password" placeholder='Password' />
        </div>
        <div className='check'>
          <input type="checkbox" id='check'/>
          <label htmlFor="check">Remember me</label>
          <p>Forgot password?</p>
        </div>
        <button>Вход</button>
        <button>Зарегистрироваться</button>
      </div>
    </form>
    {/* <form className="sign-up"></form> */}
    </div>
  )
}