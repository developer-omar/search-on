import { SearchEngine } from "../interfaces/search-engine.interface";

const defaultSearchEngines: SearchEngine[] = [
  {
    id: 1,
    name: "Google",
    iconName: "google",
    nickname: "g",
    url: "https://www.google.com/search?client=firefox-b-lm&channel=entpr&q=%s",
    selected: 1
  },
  {
    id: 2,
    name: "Bing",
    iconName: "microsoft-bing",
    nickname: "b",
    url: "https://www.bing.com/search?pc=MOZI&form=MOZLBR&q=%s",
    selected: 0
  },
  {
    id: 3,
    name: "DuckDuckGo",
    iconName: "duck",
    nickname: "d",
    url: "https://duckduckgo.com/?t=lm&q=%s&ia=web",
    selected: 0
  },
  {
    id: 4,
    name: "Wikipedia",
    iconName: "wikipedia",
    nickname: "w",
    url: "https://en.wikipedia.org/wiki/Special:Search?search=%s",
    selected: 0
  },
  {
    id: 5,
    name: "Youtube",
    iconName: "youtube",
    nickname: "y",
    url: "https://www.youtube.com/results?search_query=%s",
    selected: 0
  },
];

export default defaultSearchEngines;
