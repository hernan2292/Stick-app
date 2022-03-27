
export const getGifs = async (category) => {
    const apikey = "api_key=B8SHK4LqRXuISm0N6ohJ9d2CBRzm8Q0c";
    const qCategory = "&q=" + category;
    const qLimit = "&limit=10";
    const url = `https://api.giphy.com/v1/stickers/search?${apikey}${encodeURI(qCategory)}${qLimit}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}