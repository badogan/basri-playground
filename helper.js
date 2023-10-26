const countrySize = "smallest"
const countryName = "Switzerland"
const prompt1 = `What is the ${countrySize} city of ${countryName}?`
const prompt2 = "Given this fact: Basri and Zeynep are married. Arda is their son. What is the relation in between Zeynep and Arda?"
const prompt3 = "Given this: Athens is widely referred to as the cradle of Western civilization and the birthplace of democracy, largely because of its cultural and political influence on the European continent, particularly Ancient Rome. It was a center for the arts, learning, and philosophy, and the home of Plato's Academy and Aristotle's Lyceum. In modern times, Athens is a huge cosmopolitan metropolis and central to economic, financial, industrial, maritime, political, and cultural life in Greece. It is a Beta-status global city according to the Globalization and World Cities Research Network and one of the biggest economic centers in Southeastern Europe. Provide 10 words summary."
const prompt4 = "Meeting transcript: Miguel: Hi Brant, I want to discuss the workstream  for our new product launch Brant: Sure Miguel, is there anything in particular you want to discuss? Miguel: Yes, I want to talk about how users enter into the product. Brant: Ok, in that case let me add in Namita. Namita: Hey everyone Brant: Hi Namita, Miguel wants to discuss how users enter into the product. Miguel: its too complicated and we should remove friction.  for example, why do I need to fill out additional forms?  I also find it difficult to find where to access the product when I first land on the landing page. Brant: I would also add that I think there are too many steps. Namita: Ok, I can work on the landing page to make the product more discoverable but brant can you work on the additonal forms? Brant: Yes but I would need to work with James from another team as he needs to unblock the sign up workflow.  Miguel can you document any other concerns so that I can discuss with James only once? Miguel: Sure. From the meeting transcript above, Create a list of action items for each person. "
const promptArray = [prompt1, prompt2, prompt3,prompt4]

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