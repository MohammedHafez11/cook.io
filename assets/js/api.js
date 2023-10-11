window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";

const APP_ID = "6df29404";
const API_KEY = "280e8d84678bfbbc16bc3512d7f9527e";
const TYPE = "public";

const fetchData = async function(queries, successCallback){
    const query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");
    const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        successCallback(data);
        
    }
}