const getPuzzle = async (countWord) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${countWord}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountryDetail = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to find country')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountryDetail(location.country)
}

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=44ecc1321d2a47')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}