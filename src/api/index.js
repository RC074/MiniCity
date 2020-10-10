const url = process.env.REACT_APP_SERVER;
// const url = "http://127.0.0.1:8080/";
export const fetchData = async (toPost) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(toPost),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
