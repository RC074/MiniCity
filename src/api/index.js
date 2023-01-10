const HEROKU_URL = "https://flask-app-summative-backend.herokuapp.com/";

const DEV_URL = "http://127.0.0.1:8080/";

const CSC_URL = "https://csclub.uwaterloo.ca/~r26li/MiniCity-backend/";

let url = CSC_URL;

export const fetchData = async (toPost) => {
  // sends a http post request and returns the response obj
  // try block bc there might be unexpected errors such as 501, 503...
  for (let i = 0; i < 2; i++) {
    try {
      // await the data to get back, then move on
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(toPost),
      });

      // returns the data
      return response.json();
    } catch (error) {
      // log the error for debugging purposes
      console.log(error);
      console.log("failed using url: " + url);
      if (i === 0) {
        url = HEROKU_URL;
        console.log("retrying with url: " + url);
      }
    }
  }
};
