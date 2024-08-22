
export const LOGO ="https://dcassetcdn.com/design_img/3831921/839461/23865691/fy5vgt000t010y795s40y50a2y_image.jpg";

export const BACKGRAOUND_IMG = "https://assets-global.website-files.com/603ca856875cc790972dd931/608a6619eabe50574259f43e_image3.png";

export const USER_ICON = "https://cdn-icons-png.freepik.com/512/13958/13958809.png";

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const PLAY_ICON = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_FuNk-QEtI8dNqWQsD8454GlflgxHTx01A&s";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGE = [
  {identifier: "en", name: "English"},  
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"},
  {identifier: "french", name: "French"},
  {identifier: "german", name: "German"},
  ];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;