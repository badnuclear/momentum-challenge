const quotes = [
  {
    quote:
      "사람은 자신이 갇힌 감옥의 문을 열고 달아날 권리가 없는 죄수이다. 그는 신이 부를 때까지 스스로 목숨을 끊지 말고 기다려야 한다.",
    author: "-플라톤",
  },
  {
    quote:
      "어떤 면에서 자살은 비열하다고는 할 수 없어도 적어도 안이한 해결 방식임에 틀림없다. 나는 내가 내 자신을 죽일 수 있음을 이미 알고 있다고 생각한다. 내가 나를 파괴하는 것으로부터 아주 풍요로운 원천을 발견한다. 그러나 물론 이것은 내가 자살하지 않을 때에만 유효한 것이다.",
    author: "-이마누엘 칸트",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "-찰스다윈",
  },
  {
    quote:
      "죽을 때에 죽지 않도록 죽기 전에 죽어두어라. 그렇지 않으면 정말 죽어버린다.",
    author: "-앙겔루스 실레시우스",
  },
  {
    quote: "희망은 어떤 상황에서도 필요하다",
    author: "-사무엘 존슨",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "-켄러",
  },
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "-키케로",
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설수 있다",
    author: "-터키속담",
  },
  {
    quote:
      "희절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다.",
    author: "-마이크 멕라렌",
  },
  {
    quote:
      "삶은 소유물이 아니라 순간 순간의 있음이다 영원한 것이 어디 있는가 모두가 한때일뿐 그러나 그 한때를 최선을 다해 최대한으로 살수 있어야 한다 삶은 놀라운 신비요 아름다움이다",
    author: "-법정 스님",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "-괴테",
  },
  {
    quote:
      "나는 누구인가 스스로 물으라 자신의 속얼굴이 드러나 보일 때까지 묻고 묻고 물어야 한다건성으로 묻지말고 목소리 속의 목소리로 귀 속의 귀에 대고 간절하게 물어야 한다해답은 그 물음 속에 있다.",
    author: "-법정 스님",
  },
  {
    quote:
      "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
    author: "-톨스토이",
  },
  {
    quote:
      "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
    author: "-괴테",
  },
  {
    quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다",
    author: "-헬렌 켈러",
  },
  {
    quote: "희내 비장의 무기는 아직 손안에 있다 .그것은 희망이다",
    author: "-나폴레옹",
  },
  {
    quote:
      "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "-L.론허바드",
  },
  {
    quote: "문제점을 찾지 말고 해결책을 찾으라",
    author: "-헨리포드",
  },
  {
    quote:
      "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다.",
    author: "-알버르트 아인슈타인",
  },
  {
    quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
    author: "-동아프리카속담",
  },
  {
    quote:
      "삶이 그대를 속일지라도 슬퍼하거나 노하지 말아라 슬픈 날에 참고 견디라 . 즐거운 날은 오고야 말리니 마음은 미래를 바라느니 현재는 한없이 우울한것 모든건 하염없이 사라지나가 버리고 그리움이 되리니",
    author: "-푸쉬킨",
  },
  {
    quote:
      "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩 ",
    author: "-조 지라드",
  },
  {
    quote: "가난은 가난하다고 느끼는 곳에 존재한다",
    author: "-에머슨",
  },
  {
    quote:
      "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다. ",
    author: "-오손 웰스",
  },
  {
    quote:
      "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.",
    author: "-메이벨 뉴컴버",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;