const url = "https://api.coincap.io/v2"

function getAssets() {
    return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

function getAsset(coin){
    return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data)
}

function getAssetHistory (coin) {
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()

    return fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
        .then(res => res.json())
        .then(res => res.data)
}

function getMarkets(coin) {
    return fetch(`${url}/assets/${coin}/markets?limit=5`)
        .then(res => res.json())
        .then(res => res.data)
}

function getExchange(id) {
    return fetch(`${url}/exchanges/${id}`)
        .then(res => res.json())
        .then(res => res.data)
}

// esta forma es de async/await
// const getMarkets = async coin => {
//     let res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
//     res = await res.json();
//     return res.data;
//   };
  
//   const getExchange = async id => {
//     let res = await fetch(`${url}/exchanges/${id}`);
//     res = await res.json();
  
//     return res.data;
//   };

export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange
}