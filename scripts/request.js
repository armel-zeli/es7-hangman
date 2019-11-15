/**
 * Call the random word API
 *
 * @param countWord
 * @returns {Promise<string>}
 */
const getPuzzle = async (countWord) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${countWord}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}
