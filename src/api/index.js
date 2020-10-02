const url = "https://flask-app-u63drvxcia-uc.a.run.app/";
// const url = "http://127.0.0.1:8080/";

export const fetchData = async (toPost) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(toPost),
    });
    // console.log(response.json())
    return response.json();
  } catch (error) {
    // console.log(error);
  }
};
