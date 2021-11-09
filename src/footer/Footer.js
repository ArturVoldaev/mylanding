import React from 'react';
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-5 align-self-center">
            <h5>Карта наших офисов:</h5>
            <img className="w-100" src= "https://avatars.mds.yandex.net/get-zen_doc/114080/pub_5cb327b0cc595b00b3b8651e_5cb59f7dcf92f800b34459f9/scale_1200" alt="Изображение мира"/>
          </div>
          <div className="col-5 align-self-center">
            <ul> 
              <li className="list-unstyled list-unstyled_bottom-space">Контактные телефоны офисов:</li>
              <li>Офис в Нью-Йорке: +1-777-777-777</li>
              <li>Офис в Берлине: +2-888-888-888</li>
              <li>Офис в Сингапуре: +3-999-999-999</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;