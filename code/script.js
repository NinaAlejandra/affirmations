const affirmations = [
  {
    affirmation: `Jag är värdefull precis som jag är`,
  },
  {
    affirmation: `På ett eller annat sätt så kommer allt att bli bra`,
  },
  {
    affirmation: `Jag är inte ensam`,
  },
  {
    affirmation: `Jag är omgiven av kärlek`,
  },
  {
    affirmation: `Jag är tillräcklig`,
  },
  {
    affirmation: `Jag är trygg`,
  },
  {
    affirmation: `Jag är stark`,
  },
  {
    affirmation: `Jag förtjänar att vara lycklig`,
  },
  {
    affirmation: `Jag är en fantastisk person`,
  },
  {
    affirmation: `Jag är omtänksam`,
  },
  {
    affirmation: `Jag får be om vad jag vill och vad jag behöver`,
  },
  {
    affirmation: `Jag är komplett som jag är`,
  },
  {
    affirmation: `Jag lär mig fortfarande så det är okej att göra misstag`,
  },
  {
    affirmation: `Jag hör hemma här, och jag förtjänar att ta plats`,
  },
  {
    affirmation: `Jag kan vara mjuk i hjärtat och samtidigt stå fast vid mina gränser`,
  },
  {
    affirmation: `Jag förtjänar stunder av tystnad`,
  },
  {
    affirmation: `Jag har visdom bortom kunskap`,
  },
  {
    affirmation: `Jag tar mig tid att uppleva sorg och ledsenhet när det behövs`,
  },
];

let btn = document.querySelector("#Qbtn");

let affirmation = document.querySelector(".affirmation");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * affirmations.length);

  affirmation.innerHTML = affirmations[random].affirmation;
});
