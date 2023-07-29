var poems = [
    {
        title: "The worst thing about my dad is",
        content: "I can’t be sure\nthe parts of myself\nI would’ve rejected\non sight"
    },
    {
        title: "Just a note on notes",
        content: "If I don’t kill myself, then this is not a suicide note. Is there some other defining attribute? I’d like to\nwrite one. It’d be liberating. These are all the reasons I’d like to die, but I’d still like to\nlive. Historically, living has been revalushanary. And now, as neoliberalism aims to weaponize\nzombiism, to turn us toward in-animacy so that we can forgo life for productivity, it remains a subversive act.\nObviously, if I were to write a suicide note, it would be a poem. I still don’t know what defines that.\nThis is a paragraph. But, in a prose poem, it might be true that paragraph = stanza. Although, if I\ndid not set out to write a prose poem, and thoughtlessly constructed a stream of sentences, then\nisn’t that just prose. Is the poem also in the intention? I named myself seeking."
    },
    {
        title: "In an apartment, in Brooklyn,",
        content: "We’re talking about Edwidge and Emily. We’re talking about how the summer’s heat is melting our\nmarrow. Morrow is the first archaic word I learned and I’m hoping it comes with cool breeze and\nmagic for mending malignancies. Memories we’d forgotten are rich arrive, like flying time is an ETL\npipeline set to start upon our every meeting. Meanings are funny things, fluid and falsifiable, humid\n(in that they stick to you). We’re talking about which jobs are cool, about murderers and their\ncauses, about strikes and obituaries. We’re talking about catastrophes. We’re talking about\nMarilynne Robinson and transcendental erasure. We’re talking about José Olivarez and “Mexican\nAmerican Disambiguation.” We’re talking about twin cats and rent hikes and dead plants and bad\ntv. We’re talking about contradictions and inconsistencies and how trains of thought are so often\noverwrought with terms and conditions. We’re talking about betrayal. We’re talking about running\nout of time. We're not talking about you."
    },
    {
        title: "Rite",
        content: "I draft all my poems in perfect typefaces,\nthe flex track is sacred.\nI looted and pillaged my words from this language,\ntradition in shambles.\nI’m famished, I’m famished.\nA poet, a rapper,\nwhomever will do.\nif you read what I wrote,\nand pick that as a quote,\nor think this is diminishing,\nsuffice to say, I’m not one for quibbling,\nriddle me this:\nwhat do I gain from playing your games?\naren’t authors dead\nanyway?"
    },
    {
        title: "Oven-roasted",
        content: "Japanese sweet potatoes\ntaste like the summer\nwhen my teeth were falling out."
    },
    {
        title: "POEM_TITLE_6",
        content: "POEM_CONTENT_6"
    }
];

function rollDice() {
    var dice = Math.floor(Math.random() * 6);

    var app = document.getElementById("app");
    var title = document.getElementById("title");
    var author = document.getElementById("author");

    title.innerHTML = poems[dice].title;
    title.className = "title";

    author.innerHTML = poems[dice].content.replace(/\n/g, '<br>');
    author.className = "poem";
}
