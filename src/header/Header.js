import React from 'react';
import "./Header.css"


class Header extends React.Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-3">
          <img className="w-100 h-100" src= "https://lh4.googleusercontent.com/proxy/voXAh6wAadEvlu54dNMaVdgl8KYc7PfxrHRTgNJ1qdaaqIEhFDWqr5ey1oQnixAR8k_w5u-fCQ=w1200-h630-p-k-no-nu" alt="Изображение логотипа"/>
          </div>
          <div className="col-7 align-self-center">
            <ul className="list-inline d-flex justify-content-around">
              <li className="list-inline-item"><a href="#ul" className="list-header-link">Наши приемущества</a></li>
              <li className="list-inline-item"><a href="#footer" className="list-header-link">Контакты</a></li>
              <li className="list-inline-item"><a href="#discount" className="list-header-link">Акции</a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;