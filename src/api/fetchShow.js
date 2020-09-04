import axios from 'axios'


export const fetchShow = () => {
  // let showData = {
  //   data: {
  //     name: "",
  //     summary: "",
  //     image: {
  //       original: ""
  //     },
  //     _embedded: {
  //       episodes: []
  //     }
  //   }
  // }
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error("Error fetching data from api. Error: ", err.message);
      return err;
    });
};


