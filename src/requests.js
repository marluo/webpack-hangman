const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200) {
        const data = await response.json() //await waits until its finished
        return data.puzzle
    } else {
        throw new Error('Unable to fetch a puzzle for you!')
    }
}

export { getPuzzle as default}