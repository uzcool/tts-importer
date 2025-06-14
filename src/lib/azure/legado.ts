import genName from "@/lib/azure/config-name";
import type { ApiConfig, VoiceConfig } from "@/lib/azure/types";

export default function legadoConfig(api: ApiConfig, voiceConfig: VoiceConfig) {
  if (!voiceConfig.voice) {
    throw new Error("未选择语音");
  }
  const header = {
    "Ocp-Apim-Subscription-Key": api.key,
    "Content-Type": "application/ssml+xml",
    "X-Microsoft-OutputFormat": voiceConfig.format,
    "User-Agent": voiceConfig.customAgent ?? "legado",
  };
  const ssml =
    `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="zh-CN">` +
    `<voice name="${voiceConfig.voice}">` +
    `<prosody rate="{{speakSpeed*4}}%" ${
      voiceConfig.pitch ? `pitch="${voiceConfig.pitch}"` : ""
    }>` +
    `${
      voiceConfig.style ? `<mstts:express-as style="${voiceConfig.style}">` : ""
    }` +
    `{{speakText}}` +
    `${voiceConfig.style ? `</mstts:express-as>` : ""}` +
    `</prosody></voice></speak>`;
  const urlConfig = {
    method: "POST",
    body: ssml,
    headers: header,
  };
  const config = {
    concurrentRate: "0",
    contentType: "audio/mpeg",
    header: JSON.stringify(header),
    id: Date.now(),
    loginCheckJs: "",
    loginUi: "",
    loginUrl: "",
    name: genName(voiceConfig),
    url: `https://${
      api.region
    }.tts.speech.microsoft.com/cognitiveservices/v1,${JSON.stringify(
      urlConfig
    )}`,
  };

  return JSON.stringify([config]);
}
