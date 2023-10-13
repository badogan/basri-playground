const countrySize = "smallest"
const countryName = "Switzerland"
const prompt1 = `What is the ${countrySize} city of ${countryName}?`
const prompt2 = "Given this fact: Basri and Zeynep are married. Arda is their son. What is the relation in between Zeynep and Arda?"
const prompt3 = "Given this: Athens is widely referred to as the cradle of Western civilization and the birthplace of democracy, largely because of its cultural and political influence on the European continent, particularly Ancient Rome. It was a center for the arts, learning, and philosophy, and the home of Plato's Academy and Aristotle's Lyceum. In modern times, Athens is a huge cosmopolitan metropolis and central to economic, financial, industrial, maritime, political, and cultural life in Greece. It is a Beta-status global city according to the Globalization and World Cities Research Network and one of the biggest economic centers in Southeastern Europe. Provide 10 words summary."
const promptArray = [prompt1, prompt2, prompt3]

const getASpecificPrompt = (n) => { return promptArray[n] }

const returnARandomPrompt = () => {
    //Calculate a random index
    const randomIndex = Math.floor(promptArray.length * Math.random(promptArray.length - 1))
    //Return random prompt
    return promptArray[randomIndex]
}

const processingFunction = (data) => { return JSON.parse(data.body).completions[0].data.text }

module.exports = {
    getASpecificPrompt,
    returnARandomPrompt,
    processingFunction
};