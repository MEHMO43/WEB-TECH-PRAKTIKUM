// Geben Sie mittels JavaScript die Breite des Layout-Viewports auf der Konsole aus.

const getViewportWidth = () => window.innerWidth || document.documentElement.clientWidth
console.log([`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel`])

// percent -> 30% der Bildschirm-Breite in px
// document.documentElement.clientWidth Viewportbreite in px

const percent = window.screen.width * 0.3
const meldung = 'Warnung! Viewport-Breite weniger als 30%'
if (document.documentElement.clientWidth < percent) {
  alert(`${meldung}`)
}

function Podcast (titel, beschreibung, autor, besitzerName, besitzerEmail, bildUrl, feedUrl, kategorien = [], letztesUpdate = new Date(), episoden = []) {
  this.titel = titel
  this.beschreibung = beschreibung
  this.autor = autor
  this.besitzerName = besitzerName
  this.besitzerEmail = besitzerEmail
  this.bildUrl = bildUrl
  this.feedUrl = feedUrl
  this.kategorien = kategorien
  this.letztesUpdate = letztesUpdate
  this.episoden = episoden

  this.addEpisode = function (episode) {
    this.episoden.push(episode)
    this.episoden.sort((a, b) => a.datum - b.datum)
  }
}

function Episode (titel, beschreibung, dauer, datum = new Date(), EpisodeAudio) {
  this.titel = titel
  this.beschreibung = beschreibung
  this.dauer = dauer
  this.datum = datum
  this.EpisodeAudio = EpisodeAudio
  this.getDauerInStundenUndMinuten = function () {
    const stunden = Math.floor(this.dauer / 3600000)
    const minuten = Math.floor((this.dauer % 3600000) / 60000)
    return (`${stunden}h ${minuten}min`)
  }
}

function EpisodeAudio (url, groesse, typ) {
  this.url = url
  this.groesse = groesse
  this.typ = typ
}

// Object.setPrototypeOf(EpisodeAudio, Episode)

const podcasts = []

const dieHeuferUmlaufNotfallsätze = new Episode('Die Heufer-Umlauf-Notfallsätze', 'Offenlegung: Schmitt hat nix diese Woche. Das sagt er sofort zu Beginn der Folge. NATÜRLICH macht man sich da erstmal Sorgen. Es fällt einem der junge Otto und der alte Jopie Heesters ein wie sie gemeinsam in einem Film auf dem Bordstein sitzen und feststellen: „Da waren sie wieder meine drei Probleme: Kein Geld, keine Frau, keine Ahnung wie es weitergehen soll! Meint Thomas es etwa so? Ist es gar ein Hilfeschrei oder was GENAU hat er nicht? Kein Bock? Keine Zeit? Keine Manieren? Oder ist es einfach nur ein ganz normaler pandemischer Gesprächseinstieg und bedeutet: Freunde, mir gehts gut. Ich bin heute mal beschwerdefrei. Die unspektakuläre Wahrheit ist: Er hat nix ERLEBT.', 3780000, '2022-07-21T10:12:50.5000z', new EpisodeAudio('', 1, 'mp3'))
const derWumboVomKnobelbecher = new Episode('Der Wumbo vom Knobelbecher', 'Nach dem großen Erfolg von „Helene Fischers“ Open Air in München vor 130 000 Menschen, lassen sich auch die drei Herrschaften von „Baywatch Berlin“ nicht länger lumpen. Die aktuelle Folge von „Baywatch Berlin“ kann man jetzt erstmals zu Hause mit echtem Helene Fischer Open Air Flair hören! Und so gehts: 50 Liter Matsch in die Badewanne schütten.', 4740000, '2022-03-23T10:12:50.5000z', new EpisodeAudio('', 1, 'mp3'))

const maddie = new Episode('Maddie', 'Maddie Stone is a security researcher for Googles Project Zero. In this episode we hear what its like battling zero day vulnerabilities. Sponsors Support for this show comes from Zscalar. Zscalar zero trust exchange will scrutinize the traffic and permit or deny traffic based on a set of rules.', 3360000, '2022-11-01T10:12:50.5000z', new EpisodeAudio('', 1, 'mp3'))
const jeremiah = new Episode('Jeremiah', 'eremiah Roe is a seasoned penetration tester. In this episode he tells us about a time when he had to break into a building to prove it wasnt as secure as the company thought. You can catch more of Jeremiah on the Were In podcast. Sponsors Support for this show comes from Axonius. The Axonius solution correlates asset data from your existing IT and security solutions to provide an always up-to-date inventory of all devices, users, cloud instances, and SaaS apps, so you can easily identify coverage gaps and automate response actions.', 3360000, '2022-09-01T10:12:50.5000z', new EpisodeAudio('', 1, 'mp3'))

const baywatchBerlin = new Podcast('Baywatch Berlin',
  'Das Beautiful Mind Klaas Heufer-Umlauf probiert in diesem Podcast nach über 10 Jahren weltfremden Jet Set Spaß Kontakt zur echten Welt aufzunehmen. Wie einst in der Weihnachtsgeschichte wird er dabei von seinen Freunden Thomas Schmitt und Jakob Lundt an die Hand genommen und langsam wieder mit den Themen des wahren Lebens in Kontakt gebracht. Tauchen Sie ein und seien Sie die Kugel im Flipperautomaten „Baywatch Berlin“!',
  'Klaas Heufer-Umlauf',
  'Studio Bummens',
  'studio@bummens.de', undefined, undefined, 'Comedy', '2022-12-16T10:12:50.5000z')
const darknetDiaries = new Podcast('Darknet Diaries', 'Explore true stories of the dark side of the Internet with Jack Rhysider as he takes you on a journey through the chilling world of hacking, data breaches and cyber crime', 'Jack Rhysider', 'Jack Rhysider', 'jack@rhysider.com', '', '', 'Technologie', '2022-12-27T10:12:50.5000z')

baywatchBerlin.addEpisode(dieHeuferUmlaufNotfallsätze)
baywatchBerlin.addEpisode(derWumboVomKnobelbecher)

darknetDiaries.addEpisode(maddie)
darknetDiaries.addEpisode(jeremiah)

podcasts.push(baywatchBerlin)
podcasts.push(darknetDiaries)

for (let i = 0; i < podcasts.length; i++) {
  console.log(`${podcasts[i].titel}:`)
  for (let j = 0; j < podcasts[i].episoden.length; j++) {
    console.log(podcasts[i].episoden[j].titel + ` (${podcasts[i].episoden[j].getDauerInStundenUndMinuten()})`)
  }
}
