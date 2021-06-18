class Request {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const veri = await response.json();
    return veri;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const veri = response.json();
    return veri;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE"
    });
    return "Veri silindi karşim";
  }
}

const request = new Request();

request
  .get("https://jsonplaceholder.typicode.com/albums")
  .then(albums => console.log(albums))
  .catch(err => console.error(err));

request
  .post("https://jsonplaceholder.typicode.com/albums", {
    userId: 6,
    title: "oynama şıkıdım"
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));

request
  .put("https://jsonplaceholder.typicode.com/albums/5", {
    userId: 7,
    title: "naptım be moruk"
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));

request
  .delete("https://jsonplaceholder.typicode.com/albums/2")
  .then(res => console.log(res))
  .catch(err => console.log(err));
