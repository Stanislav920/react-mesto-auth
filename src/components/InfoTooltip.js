import React from 'react';
import yesIcon from '../images/yesIcon.svg';
import notIcon from '../images/notIcon.svg';

function infoTooltip(props) {
  let image = props.isRegisered ? yesIcon : notIcon;

  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_place-entrance">
        <div className="popup__wrapper">
          <img className="popup__img" src={image} alt="" />
          <p className="popup__text">
            {props.isRegisered
              ? 'Вы успешно зарегистрировались!'
              : 'Что-то пошло не так! \
Попробуйте ещё раз.'}
          </p>
        </div>
        <button className="popup__close" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default infoTooltip;
