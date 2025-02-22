import {TaleRequest} from "./tale.request";
import {GeminiService} from "../gemini/gemini.service";
import {ElevenLabsClient} from "elevenlabs";
import {fal} from '@fal-ai/client';

export class TaleService {
  constructor(
    private gemini: GeminiService,
    private elevenLabs: ElevenLabsClient
  ) {
  }

  storyText = (r: TaleRequest) => this.gemini.generate(JSON.stringify(r), r.step, r.storyHistory).then((r) => JSON.parse(r));
  storyImage = (text: string) => fal.subscribe('fal-ai/recraft-v3', {
    input: {
      prompt: text.slice(0, 400),
      style: 'digital_illustration',
      image_size: {
        width: 512,
        height: 512
      }
    }
  }).then(r => r.data.images[0].url);

  storyAudio = (r: string) =>
    this.elevenLabs.textToSpeech.convertAsStream("JBFqnCBsd6RMkjVDRZzb", {
      text: r,
      model_id: "eleven_multilingual_v2",
      output_format: "mp3_44100_128"
    });
}
