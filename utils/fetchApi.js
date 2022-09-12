import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


 

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '6c09d9884emsh3d2c79da8415f43p12df67jsnc82a5d54a73e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }

    });
    return data;
}