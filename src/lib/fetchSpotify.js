export default async function fetchSpotify(providerToken, endpoint="") {
    const headers = {
        'Authorization': `Bearer ${providerToken}`,
    };
    const url = `https://api.spotify.com/v1/me${endpoint}`;
    return await fetch(url, { headers }).then(res => res.json())

}