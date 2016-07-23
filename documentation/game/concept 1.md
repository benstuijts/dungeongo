# Game Concept versie 1.0

## Algemeen

Dungeon Go is een spel waarin een speler een dungeon kan bezoeken en zelf kan creëren. De dungeons worden virtueel geplaatst op "echte" locaties op aarde via google maps. Deze dungeons kunnen gevonden worden door in de buurt van de locatie te komen. Gemakkelijke dungeons verschijnen al op de map wanneer je op 100 meter bent. Moeilijke dungeons wellicht wanneer je binnen een straal van 10 meter van deze dungeon staat.

Iedere speler heeft een eigen dungeon, die op de plek staat, waar de speler het spel gestart heeft. Deze dungeon kan bezocht / gespeeld worden door andere spelers. Wanneer een speler jouw dungeon bezoekt ontvang jij 5 dungeon coins. Zelf een dungeon bezoeken kost 10 dungeons coins. Een dungeon bestaat standaard uit 5 levels. In ieder level moet op zoek worden gegaan naar de trap naar het onderliggende level. Op het onderste level kan de kist waarin de schat van de dungeon verborgen is gevonden worden.

Een dungeon kun je alleen spelen of met een groepje (maximaal 6 per dungeon). De creatures zullen dan wel aanzienlijk sterker zijn. maar je kunt een creature dan ook met meerdere spelers aanvallen. Er zijn speciale dungeons, die alleen toegankelijk zijn waneer een complete party van spelers aanwezig is en de dungeon binnengaat (4 - 100 spelers). Deze speciale dungeon events worden gehouden op speciale plekken en hiermee kunnen bijzondere items, creatures en dungeon items gewonnen worden.

Jouw dungeon kan altijd uitgebreid worden tot en met 99 levels. Daarvoor moet je in het bezit zijn van dungeon orb. Door deze orb te gebruiken wordt een level toegevoegd aan jouw dungeon.

Jouw dungeon kan je volledig zelf aanpassen: Je kunt muren, vallen en deuren plaatsen. Jouw dungeon wordt bewaakt door creatures, die je kunt kopen met creature coins.

Wanneer een speler een dungeon binnen gaat, start hij of zij altijd op level 1 (exp). Door vijanden te verslaan, kan exp verdiend worden en stijg je in level. Hierdoor worden de str (strength), dex (dexterity), int (intelligence), hp (hitpoints) en mp (magic points) vergroot. Wanneer een item gevonden wordt in de blauwe kisten, kun je dit item alleen gebruiken in de dungeon waarin je op dat moment speelt. Wanneer je de dungeon verlaat (verslagen of gewonnen), verlies je al deze items. Wanneer je een item vindt in de rode kisten, mag je deze behouden en kun je deze items ook gebruiken in andere dungeons. Items hebben wel een bepaalde houdbaarheid: Door ze te gebruiken verliezen zij dur (durability). Wanneer een item een durability heeft van 0 dan is het item vernietigd.

In de wereld zijn shops te vinden, waar je items kunt kopen, tegen betaling van dungeon coins en ook workshops, waarin jij jouw items kan laten maken tegen betaling van dungeon coins. Standaard dungeons items (walls, doors etc) kun je gewoon kopen bij jouw eigen dungeon. Er zijn op aarde ook dungeonshops waar je bijzondere dungeons items en creatures kunt kopen.

## Play a dungeon
Wanneer je een dungeon binnengaat, zie je de tiles, direct om jou heen. Je kunt de tiles ook in de verte zien, mits niet geblokt door muren. Je kunt in 8 richtingen kijken. De tiles, waarop je staat en direct aan jouw positie grenzen, worden met een opacity van 1 weer gegeven. Iedere tile verder zorgt voor een daling van de opacity met 0.2. Fakkels of andere lichtpunten zorgen voor een opacity van 1 direct aan de tile, die verlicht wordt.

## Enemies in a dungeon
Vijanden kunnen verschillende gedragen hebben:
GUARD: Vijand blijft op zijn positie en valt pas aan wanneer je direct tegenover hem komt te staan.
GUARD-AREA: Vijand blijft op zijn positie staan en valt aan wanneer je binnen een aantal vakjes (minimaal 1) van hem komt te staan.
RUN: Wanneer je in de buurt komt van een vijand (minimaal 1 vakje) rent hij weg om een gevecht te voorkomen.
CHASE: Wanneer een vijand jou ziet, blijft hij achter jouw aan zitten totdat hij jouw aangevallen heeft.
SMELL_CHASE: Een vijand kan jou ruiken en komt actief naar jou toe.
SMELL_RUN: Een vijand probeert het gevecht met jou te voorkomen door weg te rennen van jou.


## Game Play Elementen

### Start Game:
* Op de plek waar jij start, wordt jouw home dungeon op aarde geplaatst.
* Kies jouw avatar, waarmee je andere dungeons gaat bezoeken.
* In een straal van 1 km worden maximaal 10 at random single player dungeons geplaatst. Deze dungeons kun je alleen spelen om het spel te leren kennen en dungeons coins te verdienen. Deze dungeons zijn altijd zichtbaar op jouw kaart en kun je dus bezoeken, zonder op zoek te gaan hiernaar.
* In een straal van 5 km wordt maximaal 1 shop en maximaal 1 workshop geplaatst. Deze shops zijn niet direct zichtbaar, maar moeten ontdekt worden. Op de kaart worden wel aanwijzingen gegeven in de vorm van een pijl, die in de richting van de shop wijst. Wanneer je je bevindt in een straal van 500 meter van de shop, zal deze zichtbaar worden op jouw kaart em zichtbaar blijven.

### Your Own Dungeon
* Geef jouw dungeon een naam.
* Standaard bestaat jouw dungeon uit 5 levels. Op ieder level is een trap naar beneden geplaatst en op het laatste level een prijzenkist level 1. De entree van jouw dungeon bedraagt 10 dungeon coins. De entree stijgt naarmate de prijzenkist in level stijgt.
* Deel jouw dungeon op social media en zorg dat spelers jouw dungeon gaan spelen. Wanneer jouw dungeon bezocht wordt verdien je daar dungeoncoins mee, waarmee jij weer betere dungeons items of items voor je eigen avatar kunt kiezen.
* Deel je dungeon in zoals je zelf wilt: Plaats extra muren om een doolhof te maken en zorg voor een pittige bewaking door creatures toe te voegen. Om jouw bezoekers te helpen kun je blauwe kisten (level 1) plaatsen. Later in het spel kun je ook rode kisten toeveogen.

### Dungeon / item shops
1. Standaard shops: found at 500 meter in range, level 1-10 items, level 1-5 dungeon items, level 1-10 creatures
2. Master shops: found at 100 meter in range, level 5-20 items, level 5-10 dungeon items, level 10-20 creatures

### Verschillende type dungeons
1. Player Driven Dungeon: level 5-99, single en multi player, prizes level 1-99, blue chests level 1-99, red chests level 1-99, creatures level 1-99
2. Random Dungeon: level 5-10, single en multi player, prizes level 1-5, blue chests level 1-4, red chest level 1-4 (25% chance), creatures level 1-6
3. Master Single Player Dungeon: level 5-25, single player only, prizes level 5-20, blue chests level 1-20, red chests level 1-10(10% chance), creatures level 1-30
4. Master Multi Player Dungeon: level 5-25, multi player (party size 2-10), prizes level 10-30, blue chests level 1-30, red chests level 1-20(10% chance), creatures level 1-40
5. Quest Dungeon: level 5-50, multi player (party size 5-20), prizes level 20-50, blue chests level 5-50, red chests level 10-40(25% chance), creatures level 10-100
6. Special Dungeon

## Dungeon Items
level 1: walls, stairs
level 2: doors
level 3: key, closed door
level 4: trap max damage 10hp
level 5: teleporter entrance, teleporter exit
level 6: hidden door (looks like wall from distance, reveals when standing in front of it)
level 7: trap max damage 20hp
level 8: lava tile (damage 4hp)
level 9: trap max damage 30hp

## Dungeon creatures

## Avatar items
level 1: normal knife
level 2: leather armor
