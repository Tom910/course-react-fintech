import React, {Component} from 'react';
import './App.css';

const logInfo = debug('app:form:info');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operator: '',
      name: '',
      description: '',
      workers: null,
      id: '1',
      succeeded: ''
    };

    this.server = 'http://s1070.vdi.mipt.ru:8080/api';

    this.handleFormSubmit1 = this.handleFormSubmit1.bind(this);
    this.handleFormSubmit2 = this.handleFormSubmit2.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit1(event) {
    event.preventDefault();

    fetch(`${this.server}/task/add`, {
      method: 'POST',
      body: Object.keys(this.state)
        .filter(key => key !== 'workers' && key !== 'id' && key !== 'succeeded')
        .map((key) => {
          return encodeURIComponent(key) + '=' + encodeURIComponent(this.state[key]);
        })
        .join('&'),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  handleFormSubmit2(event) {
    event.preventDefault();

    logInfo('srvr', `${this.server}/task/get?id=${this.state.id}`);

    fetch(`${this.server}/task/get?id=${this.state.id}`, {
      method: 'GET',
    }).then(response => response.json())
      .then(value => {
        if (value === null) {
          this.setState({
            succeeded: ''
          });
          return;
        }

        logInfo('taska', value);

        const start = new Date(value.createTime);
        let succeeded = 0;

        Object.entries(value).forEach(([key, value]) => {
          if (([
              'receiveDate',
              'startDate',
              'prepareStartTime',
              'prepareEndTime',
              'endManeuresTime',
              'readyWatchTime',
              'endWatchTime',
              'acceptTime',
              'endConnectionTime',
              'readyFillTime',
              'startFillTime',
              'endDisconnectionTime',
              'endProbeTime',
              'readyWatchTime2',
              'acceptTime2',
              'prepareEndTime2',
              'endManeuresTime2',
              'finishTime'
            ].indexOf(key) !== -1) && ((new Date(value)) > start)) {
            ++succeeded;
          }
        });

        this.setState({
          succeeded: Math.round(100 * succeeded / 13)
        });
      });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /*
  chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
   */

  async componentDidMount() {
    fetch(`${this.server}/worker/get/all`, {method: 'GET'})
      .then(response => {
        logInfo('1', response);
        return response.json()
      })
      .then(array => {
        logInfo('2', array);
        this.setState({
          workers: array.map(worker => worker.name)
        });
      });
  }

  render() {
    if (this.state.workers === null) {
      return <div></div>;
    }

    const select = <select onChange={this.handleInputChange} name="operator" value={this.state.operator}>
      {this.state.workers.map(worker => {
        return (
          <option key={worker} value={worker}>{worker}</option>
        );
      })}
    </select>;

    console.log('bs', this.state);
    const succeeded = (this.state.succeeded === '') ? null : <div>Задача готова на {this.state.succeeded}%</div>;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header__title">Таск-менеджер</h1>
        </header>
        <div className="App-container">
          <div className="Appppppform">
            <h2>Поставить задачу оператору</h2>
            <form onSubmit={this.handleFormSubmit1}>
              <label> <span>Название задачи</span>
                <input type="text"
                       name="name"
                       placeholder="Обход по расписанию"
                       required
                       onChange={this.handleInputChange} />
              </label> <label> <span>Описание задачи</span>
              <input type="text"
                     name="description"
                     placeholder="Обычный обход"
                     required
                     onChange={this.handleInputChange} />
            </label> <label> <span>Оператор</span> {select}
            </label> <label>
              <input type="submit" value="Отправить" />
            </label>
            </form>
          </div>
          <div className="Appppppform">
            <h2>Проверить прогресс выполнения задачи</h2>
            <form onSubmit={this.handleFormSubmit2}>
              <label> <span>Введите ID задачи</span>
                <input type="number" name="id" min="1" required onChange={this.handleInputChange} />
              </label> <label>
              <input type="submit" value="Отправить" />
            </label>
            </form>
            {succeeded}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
