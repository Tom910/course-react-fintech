const httpRequest = require('./httpRequest').default;

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

describe('httpRequest', () => {
  /*
  * Нам необходимо написать middleware который будем перехватывать экшены и отправлять данные. По сути будет враппером для запросов.
  * Нужен для того, что бы уменьшить количество логики разбросанной по приложению
  *
  * Предполагаем, что нам миделвеа должны перехватывать экшены с типом API_REQUEST. Дальше запрашивать по переданным данным информацию и отправлять ответ
  *
  * Структура экшена будет такая
  *
  * {
    type: 'API_REQUEST',
    request: {
      API,
      method,
      query
    },
    call: {
      success,
      fail
    }
  }

  Мидделвеар должен вернуть промис и при успешном вызове диспатчить call.success передая данные в payload. При возникновении ошибки, call.fail


  В Этом тесте используются снапшоты, результаты выполнений можно увидеть тут src/middleware/__snapshots__/httpRequest.test.js.snap
  * */


  let store;
  let next;
  let request;

  beforeEach(() => {
    store = { dispatch: jest.fn() };
    next = jest.fn();
    request = httpRequest(store)(next)
  });

  describe('Перехватывание экшены', () => {
    it('Отправляем не подходящие экшены', () => {
      request({ type: 'ACCOUNTS' });
      expect(next).toBeCalled();

      request({ type: `RANDOM_REQUEST_${Math.random()}` });
      expect(next).toBeCalled();
    });

    it('Экшен должен быть перехвачен', () => {
      request({ type: 'API_REQUEST', request: { API: 'kkk', method: 'get' }, call: { success: 'ACCOUNT_SUCCES', fail: 'ACCOUNT_FAIL' } });

      expect(next).not.toBeCalled();
    })
  });

  describe('Перехватили', () => {
    it('Проверяем вызов когда fetch успешен', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, '{"ids": 213 }')));

      return request({ type: 'API_REQUEST', request: { API: 'site.com', method: 'get', query: '/name=4' }, call: { success: 'ACCOUNT_SUCCES', fail: 'ACCOUNT_FAIL' } })
        .then(() => {
          expect(fetch.mock.calls).toMatchSnapshot();
          expect(store.dispatch.mock.calls).toMatchSnapshot();
        });
    });

    it('Проверяем вызов когда fetch упал', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject(mockResponse(500, null)));

      return request({ type: 'API_REQUEST', request: { API: 'site.com', method: 'get', query: '/name=4' }, call: { success: 'ACCOUNT_SUCCES', fail: 'ACCOUNT_FAIL' } })
        .then(() => {
          expect(fetch.mock.calls).toMatchSnapshot();
          expect(store.dispatch.mock.calls).toMatchSnapshot();
        });
    });

  });
});
