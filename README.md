# Reputation Attendance Protocol 

See Pitch here: https://github.com/VMLVaske/EthBerlin3/blob/master/pitch.pdf

See Vercel Demo here: https://rep-wheat.vercel.app/

## Idea

Initially, we wanted to revive Kickback 
Remmmber kickback? The solution where you had to stake some money in order to register for event tickets and then got the money back once you showed up (and even some additional money from the people who did not show up and left their money in the pot. 

But compiling + deploying the old contracts in a functioning state was a little too hardcore for us in the given timeframe. 
So we pivoted into a reputation based ticketing system that allows users to apply for tickets by staking their reputation tokens. 

If participants don't show up to the event, they loose reputation token and their overall reputation score goes down. 
If they show up, they get their reputation token back and their score goes up :) 

The use case for this lies in exclusive events, i.e. raave
If you have the option to sort a waiting list and thereby give space to the most reputable (a.k.a. the most avid event goers!), the waitlist system may become a bit fairer. 

### What about hacking the system? 
Hacking the system actually is a good thing. 

In the initial solution, we wanted to integrate kickbacks "stake with real money" system and then, once people earned reputation tokens through showing up for the events, go from money-staking to reputation staking. 

In this version, it would've been possible to "hack the system" by creating a bunch of burner wallets and still register for all the events. 

However, that would actually be a good thing, coz the money goes to event organizers and attendees - so it would flow back into the ecosystem. 
And: using burner wallets is disincentivized coz reputation would be needed to go to more exclusive events (think raaev or degendinner). 

### What about newbies without rep? 
See previous point :) In a solution where initial entry is possible through staking money, reputation tokens will be earned by showing up to the events. Thus, newbies are welcomed 
