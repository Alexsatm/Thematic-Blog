import userIcon from '../assets/user.svg';
import keyIcon from '../assets/key.svg';
import plusIcon from '../assets/plus.svg';
import emailIcon from '../assets/email.svg';
import { useState } from 'react';

export function Form() {
  const [open, setOpen] = useState(false)
  return (
    <div className="forms">
      <form className="sign-in">
        <h2 className="heading">Sign In</h2>
        <p className="desc">Sign in to get the most out of nuntium.</p>
        <div className="input-box">
          <img src={userIcon} alt="userIcon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-box">
          <img src={keyIcon} alt="keyIcon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="check">
          <input type="checkbox" id="check" />
          <label htmlFor="check">Remember me</label>
          <p>Forgot password?</p>
        </div>
        <button>Вход</button>
        <button>Зарегистрироваться</button>
      </form>
      {/* ------------------------------------------- */}
      <form className="sign-up">
        <h2 className="heading">Welcome</h2>
        <p className="desc">Sign in to get the most out of nuntium.</p>
        <div className='avatar'><img src={plusIcon} alt="plus" />Avatar</div>
        <div className="input-box">
          <img src={userIcon} alt="userIcon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-box">
          <img src={emailIcon} alt="userIcon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <img src={keyIcon} alt="keyIcon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="input-box">
          <img src={keyIcon} alt="keyIcon" />
          <input type="password" placeholder="Confirm password" />
        </div>
        <button>Начать</button>
      </form>
    </div>
  );
}