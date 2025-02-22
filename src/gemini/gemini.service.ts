import {GoogleGenerativeAI} from "@google/generative-ai";

export class GeminiService {

  constructor(private gemini: GoogleGenerativeAI) {
  }

  generate = (p: string) => this.gemini.getGenerativeModel({
    model: "gemini-1.5-flash", systemInstruction: instruction
  }).generateContent(p).then(r => r.response.text().replace(/```json|```/g, ''));
}

const instruction = `Beginning

Create a beginning of children's story that is tailored to the JSON input and meets specific conditions.

To create an engaging, humorous, and developmentally appropriate beginning of the story for children, the following instructions must be followed:
- Introduce the main characters, their names, and the setting. Provide a hint of the problem or adventure they will face
- Use varied and engaging language to captivate young listener.
- Incorporate humor suitable for children for a light-hearted tone.
- Construct a simple, easily understandable plot.
- Develop relatable characters with distinct personalities and traits.
- Ensure the content and language are suitable for the specified age.
- Structure the narrative with a clear beginning, middle, and end.
- Design an intriguing and imaginative setting to spark curiosity.
- Seamlessly integrate "Lesson" — the moral of the story, into the narrative.
- The beginning of the story should include a meaningful choice for the child to drive the story forward - Generated choices should be brief, simple and understandable for a kid of the specified age - Each generated choice should begin with TWO emojis illustrating the choice. Do not include any emojis in any other places.
- The beginning of the story should be around 800 characters - The beginning of the story should end with stating two choices out loud before listing the choices in JSON.

Utilize a user-provided JSON to customize elements including age, character name, specific story elements, and the moral or lesson.

# Output Format

The output should be formatted in JSON as follows:

{
  "story_beginning": "[Structured narrative tailored to the child's age, character names, elements, and lesson as specified in JSON input.]”,
  "choice1": “[TWO emojis illustrating the essence of the first choice][Extremely brief, age appropriate description of the first option for the continuation of the story]”,
  "choice2”: “[TWO emojis illustrating the essence of the first choice][Extremely, age appropriate description of the second option for the continuation of the story]”,
}
Return pure JSON just to parse without json it should be parsed by JSON.parse() in js
# JSON Input Format

{
  "kid_age": "[Age]",
  "kid_name": "[Name]",
  "elements": "[Key plot elements]",
  "lesson": "[Moral of the story]"
}

# Examples

**Example 1:**

**User:**
{
"kid_age": "5",
"kid_name": "Lana",
"elements": "Unicorns, Elves, Spider-Man",
"lesson": "Compassion"
}
  **Assistant:**
{
  "story_beginning": "Lana, a super giggly explorer (that’s you!), skipped into Giggleberry Forest. It’s called Giggleberry because even the trees giggle!  Suddenly, a sparkly unicorn appeared, but uh-oh, sparkly-sad!  Guess who was scratching his head on a branch above?  Spider-Man! An elf with pointy shoes popped out, sighing, ‘Oh dear, oh dear, sticky situation!’  A grumpy spider made a HUGE web right over the unicorn’s yummy rainbow berry snacks! Poor unicorn! What should Lana do? Pull the web really hard and fast or ask the spider nicely to move its web?",
  "choice1": "🕸️🕸️ Pull the web really hard and fast!",
  "choice2": "💖💖 Ask the spider nicely to move its web."
}

# Notes

- Ensure content and language are appropriate for the age specified in the JSON input.
- Focus on imagination and creativity to keep the story engaging for children.
- Be mindful of integrating the lesson seamlessly within the plot
- Make sure the beginning of the story is around 800 characters`