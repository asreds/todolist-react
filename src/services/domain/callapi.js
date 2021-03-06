import superagent from 'superagent';
import httpException from './exception';

// request api
export function request (method, endpoint, params = {}) {
  method = method.toLowerCase();
  const formdata = !params || method === 'get' ? {} : generateFormdata(params);
  return new Promise(resolve => {
    superagent[method](`${endpoint}`)
      .timeout(60000)
      .set('Accept', 'application/json')
      .send(formdata)
      .on('error', err => {
        console.log(err);
        return resolve(httpException(500, err, true));
      })
      .end((err, res) => {
        if (err) {
          return resolve(httpException(500, err, true));
        } else {
          let response = JSON.parse(res.text);
          if (
            (response.status === 401 || response.status === 409) &&
            response.data &&
            response.data.type === 409 &&
            typeof window !== 'undefined'
          ) {
            setTimeout(() => {
              window.location.href = '/api/auth/logout';
            }, 1000);
          }
          response.request_at = new Date().getTime();
          return resolve(response);
        }
      });
  });
}

// formdata generator
function generateFormdata (params) {
  let formdata = new FormData();
  // return params
  Object.keys(params).map(n => {
    formdata.append(n, params[n]);
  });

  return formdata;
}
