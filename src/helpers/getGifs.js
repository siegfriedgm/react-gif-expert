export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=n8UL5T1guLWXxjo1D0zShF6iCaY8h2rT&q=${category}&limit=20`;
    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;

}