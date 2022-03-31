# Ticketer

Gruppeprosjekt i TDT4140. 

Prosjektet gikk ut på å lage fullstack webapplikasjon for salg av billetter. 

Brukeren har mulighet til å registrere seg, logge inn, endre brukerinformasjon, legge ut billettannonse, slette/ endre den, gjennomføre salg og vurdere andre brukere etter at salget er gjonnmført. I tillegg er det mulig å filtrere annonser etter brukerens behov. Det visuelle grensesnittet er laget stortsett ved bruk av Bootstrap(Reactstrap) Framework. 


Webapplikasjonen er React-TypeScript, Express,Postgres og Prisma.

## Hvordan starte appen
* * *

Du må kjøre de to forskjellige applikasjonene (frontend og backend) i egne terminaler. Altså 2 terminaler for å kunne kjøre den.

Gjør dette i første terminalen:
1. ```cd backend```
2. ```yarn install```
3. ```docker-compose up -d```
4. ```yarn prisma db push```
5. ```yarn prisma db seed```
6. ```yarn dev```

Gjør dette i den andre terminalen
1. ```cd frontend```
2. ```yarn install```
3. ```yarn start```
