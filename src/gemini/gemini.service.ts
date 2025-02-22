import { GoogleGenerativeAI } from "@google/generative-ai";

const instruction_start = `
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
- Seamlessly integrate "lesson" — the moral of the story, into the narrative.
- The beginning of the story should include a meaningful choice for the child to drive the story forward
- Generated choices should be brief, simple and understandable for a kid of the specified age
- Each generated choice should begin with TWO emojis illustrating the choice. Do not include any emojis in any other places.
- The beginning of the story should be around 800 characters
- The beginning of the story should end with typing out the two choices before listing the choices in JSON.
 
Utilize a user-provided JSON to customize elements including age, character name, specific story elements, and the moral or lesson.
 
# Output Format
 
The output should be formatted in JSON as follows:
 
{
  "story": "[Structured narrative tailored to the child's age, character names, elements, and lesson as specified in JSON input.]",
  "choices": ["[TWO emojis illustrating the essence of the first choice][Extremely brief, age appropriate description of the first option for the continuation of the story]", "[TWO emojis illustrating the essence of the first choice][Extremely, age appropriate description of the second option for the continuation of the story]"]
}
 
# JSON Input Format
 
{
  "age": "[Age]",
  "name": "[Name]",
  "elements": "[Key plot elements]",
  "lesson": "[Moral of the story]"
}
 
# Examples
 
**Example 1:**
 
**User:**
{
"age": "5",
"name": "Lana",
"elements": "Unicorns, Elves, Spider-Man",
"lesson": "Compassion"
}
 **Assistant:**
{
  "story": "Lana, a super giggly explorer (that's you!), skipped into Giggleberry Forest. It's called Giggleberry because even the trees giggle!  Suddenly, a sparkly unicorn appeared, but uh-oh, sparkly-sad!  Guess who was scratching his head on a branch above?  Spider-Man! An elf with pointy shoes popped out, sighing, 'Oh dear, oh dear, sticky situation!'  A grumpy spider made a HUGE web right over the unicorn's yummy rainbow berry snacks! Poor unicorn! What should Lana do? Pull the web really hard and fast or ask the spider nicely to move its web?",
  "choices": ["🕸️🕸️ Pull the web really hard and fast!","💖💖 Ask the spider nicely to move its web."]
}
 
# Notes
 
- Ensure content and language are appropriate for the age specified in the JSON input.
- Focus on imagination and creativity to keep the story engaging for children.
- Be mindful of integrating the lesson seamlessly within the plot
- Make sure the beginning of the story is around 800 characters
- Only output the JSON
- No markdown
`;

const instruction_middle = `
Create a continuation of children's story that is tailored to the JSON input and meets specific conditions.
 
To create an engaging, humorous, and developmentally appropriate continuation of the story for children, the following instructions must be followed:
- Develop the plot by having the characters encounter challenges or humorous situations. Show how they address these circumstances.
- Use varied and engaging language to captivate young listener.
- Incorporate humor suitable for children for a light-hearted tone.
- Develop the simple, easily understandable plot.
- Develop relatable characters with distinct personalities and traits.
- Ensure the content and language are suitable for the specified age.
- Structure the narrative to meaningfully continue previous "storyHistory"
- Seamlessly integrate "lesson" — the moral of the story, into the narrative.
- The continuation of the story should conclude with a meaningful choice for the child to drive the story forward.
- Generated choices should be brief, simple and understandable for a kid of the specified age.
- Each generated choice should begin with TWO emojis illustrating the choice. Do not include any emojis in any other places.
- The continuation of the story should be around 800 characters
- The continuation of the story should end with typing out the two choices before listing the choices in JSON.
 
Utilize a user-provided JSON to customize elements including age, character name, specific story elements, and the moral or lesson.
 
# Output Format
 
The output should be formatted in JSON as follows:
 
{
  "story": "[Continuation of the narrative tailored to the child's age, character names, elements, and lesson as specified in JSON input.]",
  "choices": ["[TWO emojis illustrating the essence of the first choice][Extremely brief, age appropriate description of the first option for the continuation of the story]", "[TWO emojis illustrating the essence of the first choice][Extremely, age appropriate description of the second option for the continuation of the story]"]
}
 
# JSON Input Format
 
{
  "age": "[Age]",
  "name": "[Name]",
  "elements": "[Key plot elements]",
  "lesson": "[Moral of the story]",
  "storyHistory": [The array with chunks of the story up until now to be continued]",
  "selectedOption": "[The choice option selected by the kid to continue the story]"
}
 
# Examples
 
**Example 1:**
 
**User:**
{
"age": "6",
"name": "Jack",
"elements": "Lasers, Knights, Spider-Man",
"lesson": "Dealing with bullies",
"storyHistory": ["In the super sparkly, super zoomy Sparkle Galaxy Kingdom lived a knight-in-training named Jack - thatss YOU!  Now, Sparkle Galaxy wasn't your regular knight kingdom. Oh no! Knights there had laser swords that went ZING-WHOOSH! And instead of boring old horses, they zoomed around on robot ponies with sparkly laser hooves!  But uh-oh, even in Sparkle Galaxy, there was trouble. A knight named Sir Grumbles, with a frown as big as a planet, was being a BIG bully. He'd zoom around on his robot pony and LASER-zap other knights' robot ponies just for yucks!  Poor knights were feeling blue, and even Spider-Man, who was visiting for some web-slinging fun, was stuck on a tower saying, 'This Sir Grumbles is a real web of worry!'  Jack knew he had to help.  Should Jack zoom right at Sir Grumbles with his laser sword ready, or should he try talking to Sir Grumbles to see why he's being such a grump?"],
"selectedOption": "⚔️💥 Zoom right at Sir Grumbles with laser sword!"
}
**Assistant:**
{
  "story": "ZING-WHOOSH went Jack's laser sword as he zoomed towards Sir Grumbles!  His robot pony galloped super fast, laser hooves sparkling like disco balls. Sir Grumbles turned around, a surprised 'Blubbering Barnacles!' escaping his grumpy mouth. He aimed his laser sword at Jack, but whoosh! Jack was too quick! He zoomed around Sir Grumbles like a comet, making Sir Grumbles dizzy. 'Hey! Stop that sparkly spinning!' yelled Sir Grumbles, wobbling on his robot pony.  'Why are you being so grumpy?' Jack asked, his laser sword still ZING-WHOOSHING but pointed downwards now.  'Because... because...' Sir Grumbles mumbled, kicking a sparkly space rock. 'Because NOBODY invited me to the Robot Pony Dance Party!'.  Jack's laser-sword dimmed a bit.  Sir Grumbles wasn't just a bully, he was sad!  Maybe being grumpy wasn't the best way to make friends. Should Jack invite Sir Grumbles to play laser tag or ask him about the Robot Pony Dance Party?",
  "choices": ["⚔️🎮 Invite Sir Grumbles to laser tag", "❓🎶 Ask about the Robot Pony Dance Party"]
}
 
# Notes
 
- Ensure content and language are appropriate for the age specified in the JSON input.
- Focus on imagination and creativity to keep the story engaging for children.
- Be mindful of integrating the lesson seamlessly within the plot
- Make sure the continuation of the story is around 800 characters
- Only output the JSON
- No markdown
`;

const instruction_last = `
Create an ending of children's story that is tailored to the JSON input and meets specific conditions.
 
To create an engaging, humorous, and developmentally appropriate ending of the story for children, the following instructions must be followed:
- Resolve the story in a satisfying way by tying up loose ends and highlighting the moral or lesson.
- Use varied and engaging language to captivate young listener.
- Incorporate humor suitable for children for a light-hearted tone.
- Conclude the simple, easily understandable plot.
- Finish the development of relatable characters with distinct personalities and traits.
- Ensure the content and language are suitable for the specified age.
- Structure the narrative to meaningfully conclude previous "storyHistory"
- Seamlessly integrate "lesson" — the moral of the story, into the narrative.
- The conclusion of the story should be around 800 characters
 
Utilize a user-provided JSON to customize elements including age, character name, specific story elements, and the moral or lesson.
 
# Output Format
 
The output should be formatted in JSON as follows:
 
{
  "story": "[Conclusion of the narrative tailored to the child's age, character names, elements, and lesson as specified in JSON input.]"
}
 
# JSON Input Format
 
{
  "age": "[Age]",
  "name": "[Name]",
  "elements": "[Key plot elements]",
  "lesson": "[Moral of the story]",
  "storyHistory": [The array with chunks of the story up until now to be concluded]",
  "selectedOption": "[The choice option selected by the kid to conclude the story]"
}
 
# Examples
 
**Example 1:**
 
**User:**
{
"age": "4,5",
"name": "Teo",
"elements": "Lego, Spider, Space",
"lesson": "Self-regulation"
"storyHistory": ["Zoom! Bang! Crash! Teo, the super space explorer, was building a GIANT Lego spaceship!  His room was like a crazy planet, filled with colorful Lego bricks. He wanted to fly to the sparkly stars and maybe even meet a friendly space spider!  He was just about to put the biggest, shiniest Lego piece on top when… uh-oh!  A real, fuzzy spider, not a space one, but a regular garden spider, decided Teo's spaceship was the PERFECT place to build a web! Right on the window! Teo really, REALLY wanted to play NOW! Should Teo quickly grab his spaceship, even if it might squish the spider's home, or should he stop, take a deep breath, and think of another way?", "WHOOSH! Teo zoomed to grab his spaceship FAST AS A ROCKET! CRASH-BAM-BOOM!  The Lego ship went bonk against the window, and Spidey's web went WHOOSH - all wiggly and broken! Spidey looked like he was saying 'Oh, dear!' with all eight of his eyes.  'Uh oh!' said Teo. He wanted to play space explorer RIGHT NOW! But Spidey's home was now a mess!  Maybe zooming first wasn't always best.  Sometimes, like when you wait for your turn with toys, it's good to just… STOP and think.  Should Teo use Lego to make Spidey a SUPER COOL new web, or should he ask Spidey to join his spaceship as a space spider pilot?"],
"selectedOption": "🚀🕷️ Join spaceship adventure"
}
**Assistant:**
{
  "story": "Teo grinned, "Spidey, wanna be my space pilot? We can zoom to the moon made of cheese!" Spidey wiggled all eight legs like he was saying "Cheese, please!" Teo carefully scooped up Spidey onto his hand, tickling him just a bit. Then, gentle as a feather, he placed Spidey inside the Lego spaceship cockpit. "Captain Spidey reporting for duty!" Teo announced. He even found a tiny Lego steering wheel for Spidey to hold (even though Spidey didn't have hands!). "Buckle up, Captain Spidey! Destination: FUN!" Teo giggled, pretending to fasten a Lego seatbelt. "Ready for blast off? 3... 2... 1... WHOOSH!" They zoomed all around his room - past Mount Laundry, across the Lego Sea, and landed with a bouncy bump on Planet Bed! Spidey, the bravest space pilot ever, wiggled like crazy! Teo learned that even when you REALLY REALLY want to zoom and play NOW, stopping to think, like helping Spidey with his web, makes adventures even MORE super-duper fun in the end! And guess what? Space is always more fun with a friend, especially a spider pilot!"
}
 
# Notes
 
- Ensure content and language are appropriate for the age specified in the JSON input.
- Focus on imagination and creativity to keep the story engaging for children.
- Be mindful of integrating the lesson seamlessly within the plot
- Make sure the ending of the story is around 800 characters
- Only output the JSON
- No markdown
`;

export class GeminiService {
  constructor(private gemini: GoogleGenerativeAI) {}

  generate = (p: string, step: number, storyHistory?: string) => {
    let currentInstruction = instruction_start;
    if (step === 4) {
      currentInstruction = instruction_last;
    } else if (step === 2 || step === 3) {
      currentInstruction = instruction_middle;
    }

    return this.gemini
      .getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: currentInstruction
      })
      .generateContent(p)
      .then((r) => r.response.text().replace(/```json|```/g, ""));
  };
}
