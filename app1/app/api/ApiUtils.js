import 'whatwg-fetch';
let apiRootUrl = 'http://localhost:3013/pfsone/api/v1/'
let ApiUtils = {
  login(user, password) {
    let url = apiRootUrl + 'login';
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: user,
        password: password,
      })
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ return data;  })
  }
};

export default ApiUtils;
