import { ref, reactive } from 'vue'


export default function useNews() {
  const newsFolder = ref([])
  const newsLocal = ref([])
  const newsItem = reactive({})
  const flag = ref(false)

  const key = '93d92d546d3100d207d4daf04e8460c1';
  const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + key;

  const getLocalStorageNews = async () => {
    const newsData = JSON.parse(localStorage.getItem('News'))
    newsLocal.value = newsData
    console.log(newsData)
    // debugger
    return Boolean(newsData?.length)
  }

  const getNewsFolder = () => {
    flag.value = false
    fetch(url).then((res) => {
      localStorage.setItem('News', res)
      res
      return res
    }).then((data) => newsFolder.value = data)
      .catch(err => console.error(err))
      .finally(() => {
        flag.value = true
        console.log(newsFolder.value)
      })
  }
  return {
    newsFolder,
    newsItem,
    flag,
    getLocalStorageNews,
    getNewsFolder,
  }
};


// export default function useLogbook() {
//   const logbookList = ref([]);
//   const logbookItem = reactive({})

//   const key = 'AKfycbzVwiK48W-NEXBhj2pWXMAIuaMdJ2rGjCvfmTZ_BJrDgzkM2hCFXUrMpoUcRCTGB5Xq';
//   const url = `https://script.google.com/macros/s/${key}/exec`;

//   const getLogbookList = () => {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then(res => {
//           localStorage.setItem('logbookList', JSON.stringify(res));

//           return res.json()
//         })
//         .then(({ data }) => {
//           logbookList.value = data
//           return resolve(data)
//         })
//         .catch(err => {
//           console.error(err)
//           return reject(err)
//         })
//         .finally(() => console.log(logbookList.value))
//     })
//   }
//   const getLogbookLItem = (id) => {
//     console.log(getLogbookList().then)
//   }

//   return {
//     logbookList,
//     logbookItem,
//     getLogbookList,
//     getLogbookLItem,
//   }
// }


