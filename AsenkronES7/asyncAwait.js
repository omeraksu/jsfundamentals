async function testData(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "string") {
        resolve(data);
      } else {
        reject(new Error("Hata oldu"));
      }
    }, 3000);
  });
  const response = await promise;
  return response;
}

testData(5)
  .then(res => console.log(res))
  .catch(err => console.error(err));

// en güzel kullanımı
async function getCurrency(url) {
  const response = await fetch(url); // response object
  console.log(response);
  const data = await response.json();
  return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
  .then(res => console.log(res.rates.TRY))
  .catch(err => console.error(err));

  