# Website-opzet HBV The Jumpers

## Hoofddoel

De website is vooral een uitnodiging voor mensen en organisaties van buiten de vereniging.

De website is dus niet bedoeld als actuele informatieplek voor huidige leden, maar als eerste kennismaking met HBV The Jumpers voor:

- mensen die zoeken naar een nieuwe basketbalvereniging
- ouders en kinderen die willen starten met basketbal
- de gemeente en maatschappelijke partners
- mogelijke sponsoren
- mensen die vrijwilligerswerk willen doen
- trainers, coaches en andere betrokkenen die bij de club willen aansluiten

## Eerste richting

De website moet voelen als:

- welkom
- betrouwbaar
- Haags en lokaal verbonden
- sportief en energiek
- warm, menselijk en vrijwillig gedragen
- interessant voor zowel gezinnen als partners en sponsoren

## Vaste keuzes

- De bestaande blauw/oranje uitstraling blijft de vaste visuele basis.
- De aanbevolen typografie is Barlow Condensed voor koppen/navigatie/knoppen en Mulish voor gewone tekst, omdat dit sportief maar uitnodigend en goed leesbaar blijft.
- De homepage moet op desktop ruim en goed gevuld aanvoelen, met grote typografie en brede contentruimte. Op mobiel moet dezelfde inhoud makkelijk scanbaar, leesbaar en goed tikbaar blijven.
- De website wordt tweetalig: Nederlands en Engels.
- Er komt een duidelijke taaltoggle waarmee bezoekers de taal van de hele pagina kunnen veranderen.
- Bij de taaltoggle komt een korte verwijzingstekst in de andere taal dan de huidige pagina. Bijvoorbeeld: op de Nederlandse pagina staat een Engelse hint die naar de taalknop verwijst, en op de Engelse pagina staat een Nederlandse hint.
- De belangrijkste actie op de homepage is: proeftraining aanvragen.
- De tweede belangrijke actie op de homepage is: sponsor worden.
- Vrijwilligerswerk krijgt een eigen pagina onder Over HBV The Jumpers.
- Contributie krijgt een eigen pagina onder Lid worden.
- Statuten en huishoudelijk reglement komen straks los zichtbaar/beschikbaar op de website, op basis van de bestanden uit Google Drive.

## Voorlopige paginastructuur

Hoofdmenu:

- Home
- Over HBV The Jumpers
- Lid worden
- Sponsor worden
- Contact

Dropdown onder Over HBV The Jumpers:

- Onze vereniging
- Geschiedenis
- Bestuur & commissies
- Vrijwilligers
- Documenten
- Veilig sportklimaat

Dropdown onder Lid worden:

- Proeftraining aanvragen
- Lid worden
- Contributie
- Voor wie is basketbal?
- Teams & leeftijden
- Veelgestelde vragen

### 1. Home

Een duidelijke welkomspagina voor externe bezoekers.

Doel van deze pagina:

- snel duidelijk maken wie HBV The Jumpers is
- bezoekers uitnodigen om te komen basketballen, sponsoren of helpen
- de belangrijkste routes zichtbaar maken: lid worden, sponsoring, vrijwilligerswerk, contact

Eerste hero-richting:

- Donker blauw/oranje openingsblok in de sfeer van een basketbalzaal/court.
- De intro gebruikt de zaal/court-afbeelding `the-jumpers/assets/court-intro.png` als achtergrond.
- Tekst komt duidelijk zichtbaar binnen met een langzame fade/slide-in van ongeveer 2 tot 3 seconden wanneer de pagina opent.
- Eerste knop: Vraag proeftraining aan.
- Tweede knop: Sponsor worden.

Voorlopige Nederlandse hero-tekst:

**Welkom bij HBV The Jumpers**

Basketballen in Den Haag voor iedereen vanaf 5 jaar.

Bij HBV The Jumpers is iedereen welkom: jong of oud, beginner of gevorderd. Wil je zelf basketballen, je kind een sportieve plek geven of basketbal in Den Haag helpen groeien? Kom proeftrainen of steun onze vereniging als sponsor, zodat nog meer kinderen een plek krijgen op het veld.

Voorlopige Engelse hero-tekst:

**Welcome to HBV The Jumpers**

Basketball in The Hague for everyone from age 5.

At HBV The Jumpers everyone is welcome: young or old, beginner or advanced. Want to play basketball, give your child a place to grow through sport, or help basketball in The Hague thrive? Join a trial practice or support our club as a sponsor, so more children can find their place on the court.

Introfilm:

- De introfilm `the-jumpers/assets/intro-filmpje.mp4` wordt op de homepage gebruikt als sfeerblok.
- De beste plek is direct na de eerste snelle keuze-blokken, niet boven de hero.
- De video start automatisch wanneer het videoblok in beeld komt tijdens scrollen. De video staat technisch eerst op mute zodat autoplay werkt; bezoekers kunnen via de videoknoppen geluid aanzetten of fullscreen kijken.
- Er komt geen aparte uitlegtekst op de pagina dat de video zonder geluid start.
- Doel van dit blok: laten voelen wie HBV The Jumpers is, met spelers, vrijwilligers, plezier, inzet en de energie van basketbal in Den Haag.

### 2. Over HBV The Jumpers / Onze vereniging

Een aparte subpagina onder `Over HBV The Jumpers > Onze vereniging`, met de huidige vereniging van vandaag.

Voorbeeldbestand:

- `the-jumpers/onze-vereniging.html`

Doel van deze pagina:

- in korte tijd duidelijk maken wie HBV The Jumpers nu is
- warm en trots vertellen waar de vereniging voor staat
- benoemen dat HBV The Jumpers meer dan 60 jaar bestaat en een fundament heeft als breedtesportvereniging
- aandacht geven aan groei, rolstoelbasketbal, vrijwilligers en de Jump Inn
- werken met afwisselende blokken tekst en foto's, sterke middenstukken en rustige scroll-animaties

Geschiedenis blijft een aparte pagina onder `Over HBV The Jumpers > Geschiedenis`.

### 2b. Geschiedenis

Een aparte subpagina onder `Over HBV The Jumpers > Geschiedenis`.

Voorbeeldbestand:

- `the-jumpers/geschiedenis.html`

Opzet:

- compacte interactieve pagina in time-mode stijl
- fullscreen beeldvlak met donkere overlay en blauw/oranje accenten
- verticale tijdlijn in het midden met klikbare jaartallen
- groot jaartal links, titel/subtitel/tekst rechts
- geen extra CTA-knoppen in de tijdlijn zelf; de tijdlijn en tekst staan centraal
- achtergrondbeeld wisselt per tijdlijnpunt; voorlopig met andere uitsneden/kleuraccenten van de beschikbare court-foto, later te vervangen door echte archieffoto's
- vorige/volgende knoppen
- tweetalig Nederlands/Engels

Taalkeuze:

- de gekozen taal wordt opgeslagen in de browser via `localStorage`
- als iemand Engels of Nederlands kiest, blijft die keuze hetzelfde bij het openen van andere voorbeeldpagina's

Eerste tijdlijnpunten op basis van oude websitetekst en Drive-documenten:

- 1962: oprichting als Haagse Basketball Vereniging The Jumpers in de gymzaal van het Johan de Wittlyceum in Scheveningen
- 1966: meisjes en dames sluiten aan
- 1967: verhuizing naar sporthal Lindoduin
- 1971: verhuizing naar sporthal Overbosch met drie velden
- 1978: gesprekken over nieuwe sporthal 't Zandje
- 1982: verhuizing naar sporthal 't Zandje en eigen kantine Jump Inn
- 2017: werken aan visie en meerjarenrichting met waarden als verbinding, respect, gelijkwaardigheid en uitdaging
- 2018: vier teams kampioen en facelift van de Jump Inn
- 2020: samenwerking met Laureus/De Einder en finales Haagse scholenbasketbal
- 2024: Open Club, Junior NBA 3x3 en schoolsport/maatschappelijke projecten

### 3. Lid worden / Contributie

Een praktische route voor nieuwe leden en ouders. Contributie krijgt hierbij een eigen pagina.

Mogelijke onderdelen:

- proeftraining aanvragen
- voor wie de club er is
- verwijzing naar contributie
- wat je nodig hebt om te starten
- veelgestelde vragen

### 3b. Contributie

Een aparte praktische pagina met de contributiebedragen.

Voorlopige contributietabel op basis van het aangeleverde knipsel:

| Categorie | Spelend | Recreant |
| --- | ---: | ---: |
| 08 | - | EUR 270,00 |
| 10 | EUR 375,00 | EUR 270,00 |
| 12 | EUR 375,00 | EUR 270,00 |
| 14 | EUR 410,00 | EUR 325,00 |
| 16 | EUR 410,00 | EUR 325,00 |
| 18 | EUR 410,00 | EUR 325,00 |
| 19 | EUR 450,00 | EUR 375,00 |
| 20 | EUR 450,00 | EUR 375,00 |
| 21 | EUR 450,00 | EUR 375,00 |
| 22 | EUR 450,00 | EUR 375,00 |
| SE | EUR 450,00 | EUR 375,00 |
| RSE | EUR 300,00 | EUR 270,00 |
| Toeslag Eredivisie | EUR 200,00 | - |
| Toeslag 1e divisie | EUR 150,00 | - |
| Inschrijfkosten | EUR 20,00 | EUR 20,00 |

### 4. Documenten

Een overzichtelijke pagina of sectie met formele documenten.

Mogelijke onderdelen:

- huishoudelijk reglement
- statuten
- andere officiÃ«le documenten

### 5. Bestuur & Contact

Een contactpagina met bestuurders en korte informatie, zodat het persoonlijk en benaderbaar voelt.

Mogelijke onderdelen:

- bestuursleden met functie
- korte persoonlijke of functionele toelichting
- algemeen contactformulier
- contact voor proeftrainingen
- contact voor sponsoring
- sporthal / locatie

### 6. Vrijwilligers

Een uitnodigende eigen pagina voor vrijwilligerswerk bij HBV The Jumpers.

Kernboodschap:

HBV The Jumpers is een vereniging van vrijwilligers voor vrijwilligers. Samen zorgen we ervoor dat kinderen, jongeren en volwassenen kunnen basketballen, groeien en plezier maken.

Mogelijke rollen:

- trainer
- coach
- teamouder
- scheidsrechter
- tafelfunctionaris
- evenementenhelper
- sponsorcommissie
- communicatie / website / social media
- praktische hulp rondom wedstrijden en activiteiten

### 7. Sponsoring

Een pagina voor bedrijven en partners.

Mogelijke onderdelen:

- waarom HBV The Jumpers steunen
- maatschappelijke waarde
- zichtbaarheid en partnership
- sponsorvormen
- contact opnemen

## Eerste tekst voor vrijwilligers

HBV The Jumpers draait op mensen die iets willen betekenen voor een ander. Onze trainers, coaches, teamouders en andere vrijwilligers zorgen er samen voor dat kinderen kunnen sporten, teams kunnen groeien en de vereniging blijft leven. Je hoeft niet alles te kunnen of al jaren basketbalervaring te hebben. Als je betrokken bent, betrouwbaar bent en energie krijgt van samenwerken, dan is er altijd een plek waar je kunt helpen.

Wij zijn een vereniging van vrijwilligers voor vrijwilligers. Iedereen draagt op zijn eigen manier bij: op het veld, langs de lijn, achter de schermen of bij activiteiten. Samen maken we het mogelijk dat zoveel mogelijk kinderen en volwassenen in Den Haag kunnen basketballen.

## Vragen voordat we gaan ontwerpen

### Thema en uitstraling

- Moet de website vooral sportief en energiek voelen, of juist warm en maatschappelijk?
- Hoe prominent mag oranje worden gebruikt: vooral als accentkleur, of ook als sterke vlakken/knoppen?
- Welke Engelse/Nederlandse verwijzingstekst willen we bij de taalknop gebruiken?

### Structuur

- Welke pagina's moeten absoluut in het hoofdmenu staan?
- Moet Contributie direct in het hoofdmenu staan, of onder Lid worden?
- Moeten statuten en huishoudelijk reglement een eigen pagina "Documenten" krijgen, of onder Over de vereniging komen?
- Moet Vrijwilligers direct in het hoofdmenu staan?

### Inhoud

- Hebben we officiÃ«le teksten over geschiedenis, statuten, contributie en bestuur al in de Google Drive staan?
- Welke bestuursleden mogen zichtbaar op de website, en met welke gegevens?
- Welke contactgegevens mogen publiek worden gebruikt?

### Actieknoppen

- Moet er een apart formulier komen voor proeftrainingen?
- Moet sponsoring direct naar een persoon, een formulier of een brochure leiden?
