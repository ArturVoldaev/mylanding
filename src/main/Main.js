import React from 'react';
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <main className="container col">
        <h1>Создание сайтов как в Майкрософт от Артура</h1>
        <h2>Мои ключевые примущества:</h2>
          <ul id="ul"> 
            <li className="list-unstyled list-unstyled_text-decoration">Использование новейших технологий.</li>
            <li className="list-unstyled list-unstyled_text-decoration">Сдача работы точно в срок.</li>
            <li className="list-unstyled list-unstyled_text-decoration">Предоставление домена на 1 год бесплатно.</li>
          </ul>
        <h3 id="discount"><a href="#">Получи дополнительную скидку!</a></h3>
      </main>
    );
  }
}

export default Main;