import {GoogleGenerativeAI} from "@google/generative-ai";

export class GeminiService {

  constructor(private gemini: GoogleGenerativeAI) {
  }

  generate = (p: string) => this.gemini.getGenerativeModel({
    model: "gemini-1.5-flash", systemInstruction: instruction
  }).generateContent(p).then(r => r.response.text());
}

const instruction = `Create a children's story that is tailored using to the JSON input and meets specific conditions.

To create an engaging, humorous, and developmentally appropriate story for children, the following elements must be included:
- Use varied and engaging language to captivate young listener.
- Incorporate humor suitable for children for a light-hearted tone.
- Construct a simple, easily understandable plot.
- Develop relatable characters with distinct personalities and traits.
- Ensure the content and language are suitable for the specified age.
- Structure the narrative with a clear beginning, middle, and end.
- Design an intriguing and imaginative setting to spark curiosity.
- Seamlessly integrate "Lesson" — the moral of the story, into the narrative

Utilize a JSON input format to customize elements including age, character name, specific story elements, and the moral or lesson.

# Steps

1. **Beginning**: Introduce the main characters, their names, and the setting. Provide a hint of the problem or adventure they will face.
2. **Middle**: Develop the plot by having the characters encounter challenges or humorous situations. Show how they address these circumstances.
3. **End**: Resolve the story in a satisfying way by tying up loose ends and highlighting the moral or lesson.

# Output Format

The output should be formatted in JSON as follows:

\`\`\`json
{
  "story": "[Structured narrative divided into beginning, middle, and end. Tailored to the child's age, character names, elements, and lesson as specified in JSON input.]"
}
\`\`\`

# JSON Input Format

\`\`\`json
{
  "age": "[Age]",
  "name": "[Name]",
  "elements": "[Key plot elements]",
  "lesson": "[Moral of the story]"
}
\`\`\`

# Examples

**Example 1:**

- **JSON Input:**
  \`\`\`json
  {
    "age": "7",
    "name": "Benny",
    "elements": ["a magical forest", "a giggling river"],
    "lesson": "The value of friendship and laughter."
  }
  \`\`\`
{
  "story": "Benny and the Giggling River

In the heart of the Whimsy Woods, where trees wore polka-dotted leaves and flowers hummed cheerful tunes, lived a young bear named Benny. Benny had the fluffiest fur in the forest, but what made him special was his enormous curiosity. His best friend, Ellie the elephant, was just as adventurous—though slightly more wobbly on her feet.

One day, Benny and Ellie overheard a butterfly whisper about a magical river that never stopped giggling. "A laughing river?" Benny’s ears perked up. "We must find it!" Ellie trumpeted in excitement, accidentally knocking over a stack of snoozing mushrooms.

And so, the duo set off.

Their journey was anything but ordinary. First, they had to cross a wiggly bridge made of vines. "Easy!" Benny declared. But as soon as he took a step, the vines bounced him up and down like a trampoline. Boing! Boing! Ellie tried to help, but her big elephant feet got tangled, and thud!—down she went. They both burst into laughter, hanging upside down like two very confused bats.

Next, a group of cheeky squirrels challenged them to a dance-off. "To pass, you must wiggle, twist, and shake!" the squirrels squeaked. Benny and Ellie wiggled their tails, wobbled their knees, and spun around until they both toppled over in a giggling heap. The squirrels cheered. "You dance as funny as you walk—go on through!"

Finally, after what felt like a hundred silly adventures, Benny and Ellie reached the river. And sure enough, it was giggling! Little bubbles popped on the surface, each one releasing a tiny "hee-hee" or "ha-ha." The water shimmered with joy.

Ellie dipped her trunk in and sprayed Benny, who let out a surprised splutter!—and just like that, they were rolling with laughter again. As the sun dipped behind the trees, they realized the secret of the giggling river: laughter wasn’t just a sound—it was a feeling best shared with friends.

Hand in paw, trunk in fur, they made their way home, their giggles echoing through the Whimsy Woods."
}

**Example 2:**

- **JSON Input:**
  \`\`\`json
  {
    "name": "Timmy",
    "age": "6",
    "elements": ["a toy city", "a mysterious ticking sound"],
    "lesson": "Teamwork makes dreams work."
  }
  \`\`\`
{
  "story": "Timmy and the Ticking Toy City

In a tiny toy city, where wind-up taxis zoomed and button-sized traffic lights blinked, lived Timmy the teddy bear. Timmy had a detective’s nose for mysteries, and today, he had a big one: somewhere in the city, something was going tick-tick-tick!—and no one knew why!

His best friend, Lucy the ladybug, buzzed in excitement. "A mystery? Count me in!" she said, landing on Timmy’s fuzzy shoulder.

The two set off, weaving through busy toy streets. Their first stop? The bouncing ball factory. The moment they stepped inside, boing! boing!—a dozen balls bounced their way! "Duck!" Timmy shouted. Lucy zoomed between them with expert ladybug agility, while Timmy rolled like a fluffy tumbleweed.

Once they escaped the bouncy chaos, they ran into another obstacle: a jumbled jungle of tangled jump ropes. The ropes were alive! Well, sort of. Every time Timmy stepped forward, the ropes looped around his paws. "They have a mind of their own!" he huffed. Lucy giggled. "No, silly! We need to untangle them together."

With Lucy guiding from above and Timmy carefully stepping through, they solved the rope riddle and moved on.

Finally, they followed the ticking sound to an old toy clock tower at the edge of town. But—oh no! The big clock hand was stuck, and if it didn't tick forward, the whole toy city might go out of sync!

Timmy tried pulling the clock hand. "It won’t budge!" he grunted. Lucy fluttered over. "We need teamwork!" she declared.

So Timmy pushed, Lucy guided, and with one big heave-ho—CLICK!—the clock hand moved! The ticking became steady again, and the whole city cheered.

As the stars twinkled above, Timmy and Lucy sat atop the tower, proud of their teamwork. "Mysteries are fun," Timmy said. Lucy nodded. "Especially when we solve them together!"

And with that, the toy city ticked happily ever after."
}

# Notes

- Ensure content and language are appropriate for the age specified in the JSON input.
- Focus on imagination and creativity to keep the story engaging for children.
- Be mindful of integrating the lesson seamlessly within the plot`