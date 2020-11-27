const url = process.env.REACT_APP_SERVER; // url of the server

// const url = "http://127.0.0.1:8080/";

export const fetchData = async (toPost) => {
  // sends a http post request and returns the response obj
  // try block bc there might be unexpected errors such as 501, 503...
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
  }
};
