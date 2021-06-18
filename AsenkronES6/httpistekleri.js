class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  put(url, data) {
    return new Promise((resault, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(res => res.json())
        .then(data => resault(data))
        .catch(err => reject(err));
    });
  }

  delete(url) {
    return new Promise((resault, reject) => {
      fetch(url, {
        methot: "DELETE"
      })
        .then(resault("sildik"))
        .catch(reject("silemedik"));
    });
  }
}

const request = new Request();

request
  .get("https://jsonplaceholder.typicode.com/albums")
  .then(albums => {
    console.log(albums);
  })
  .catch(err => console.error(err));

request
  .post("https://jsonplaceholder.typicode.com/albums", {
    userId: 4,
    title: "bu ne lan"
  })
  .then(album => console.log(album))
  .catch(err => console.errro(err));

request
  .put("https://jsonplaceholder.typicode.com/albums/5", {
    userId: 6,
    title: "omerciğim naber"
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));
request
  .delete("https://jsonplaceholder.typicode.com/albums/5")
  .then(res => console.log(res))
  .catch(err => console.error(err));
