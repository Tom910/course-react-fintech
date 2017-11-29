import React, { Component } from 'react';
import InfoItem from '../InfoItem/InfoItem'
import Wrapper from '../Wrapper/Wrapper'
import WrapperAbout from '../Wrapper/WrapperAbout'

import './Info.css'

class Info extends Component {

  openBox = (id) => {
    if (document.getElementById(id).style.display === 'block') {
      document.getElementById(id).style.display = 'none'
    }
    else {
      if (id === 'box1') {
        document.getElementById('box1').style.display = 'block';
        document.getElementById('box2').style.display = 'none';
        document.getElementById('box3').style.display = 'none';
      }
      if (id === 'box2') {
        document.getElementById('box2').style.display = 'block';
        document.getElementById('box1').style.display = 'none';
        document.getElementById('box3').style.display = 'none';
      }
      if (id === 'box3') {
        document.getElementById('box3').style.display = 'block';
        document.getElementById('box1').style.display = 'none';
        document.getElementById('box2').style.display = 'none';
      }
    }
  };

  render() {
    return (
      <Wrapper
        header="About us"
        descr="For companies which develop software to find bugs in the earliest stages of development."
        tag="about">
        <div>
          <InfoItem id='0' onClick={()=> this.openBox('box1')}/>
          <InfoItem id='1' onClick={()=> this.openBox('box2')}/>
          <InfoItem id='2' onClick={()=> this.openBox('box3')}/>
        </div>
        <div id='box1' style={{display: 'none'}}>
          <WrapperAbout header='Проблема'>
            <p>
              Согласно исследованию, проведенному в университете Кембриджа, в среднем разработчики тратят 50% рабочего времени на поиск и исправление ошибок, что стоит всей индустрии в целом 312 миллиардов долларов в год. При этом нельзя просто меньше заботиться об ошибках - даже один дефект способен привести к катастрофическим последствиям (слайды с катастрофами)
            </p>
            <p>
              Первый пример: Это крушение ракеты Ариан-5, вызванный ошибкой в управляющей программе.
            </p>
            <p>
              Второй пример: Брокер Knight Capital's потерял $440 mln за 45 минут из за ошибки в алгоритме торговли
            </p>
            <p>
              Существует множество инструментов, которые помогают работать с ошибками. Все они либо работают с исходном кодом, как с текстом, либо анализируют ход выполнения программы. Эти подходы позволяют проверить код на наличие типовых ошибок.
            </p>
          </WrapperAbout>
        </div>
        <div id='box2' style={{display: 'none'}}>
          <WrapperAbout header="Особенности Sybil">
            <p>
              Наша система работает иначе. Обученная на десятках реальных проектов, она “смотрит” на код так, как бы на него смотрел опытный программист и для каждого файла программы рассчитывает вероятность нахождения в нём ошибки. Это позволяет мгновенно локализовать ошибки и оценивать качество кода.
            </p>
            <p>
              Система благодаря методам машинного обучения способна искать ошибки любых типов.
            </p>
            <p>
              Оценка качества кода.
            </p>
          </WrapperAbout>
        </div>
        <div id='box3' style={{display: 'none'}}>
          <WrapperAbout header="Для кого и зачем">
            <p>
              Нашими клиентами являются компании, разрабатывающие ПО и отдельные команды разработчиков. Мы ориентируемся на те компании и команды, которые уже используют автоматизированные решения для обеспечения качества кода.
              В компаниях - тим лиды, кволити ашуранс инженеры
              Какие полезные возможности даёт наш продукт? Каким компания? В каких условиях? В каких командах? При каком ворк флоу?
              Описание возможностей (С учётом того, что алгоритм возвращает вероятность ошибки в модуле в настоящий момент):
            </p>
            <p>
              В короткие сроки необходимо выпустить новую версию продукта. Нет возможности протестировать всё одинаково хорошо. Надо расставить приоритеты. Наш продукт позволяет отранжировать модули по вероятности возникновения ошибки. Эта информация поможет расставить приоритеты точнее.
            </p>
            <p>
              Необходимо иметь представление о состоянии кодовой базы. Например, используется такой показатель, как покрытие кода тестами. Мы предлагаем использовать “вероятность ошибки” как ещё один такой показатель. Это позволит в краткие сроки принимать взвешенные решения о дальнейшем ходе разработки.
            </p>
            <br />
            <p>
              Например:
              <ul>
                <li>Если в какой-то момент модуль становится “критически неустойчивым”, то стоит разделить его логику по двум отдельным модулям.
                </li>
                <li>Другим решением является запрет на добавление в репозиторий новой версии модуля, если она слишком “ошибкопасна”.
                </li>
                <li>Также можно использовать “ошибкоопасность” для определения того, стоит ли добавлять новую версию модуля в сборку для тестирования или над ней необходимо поработать ещё.
                </li>
              </ul>
            </p>
          </WrapperAbout>
        </div>
      </Wrapper>
    )
  }
}

export default Info;