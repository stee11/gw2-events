This program uses the Guild Wars 2 API to get event data from a server 
and map.

The program is ran using a simple python CGI server using the command 
"python -m CGIHTTPServer" from the directory where the index file is 
located.

The API call for different maps and servers can be found on line 29 of 
getData.py. Here are the list of events and servers if you would like to 
change the call.

Maps and server data for api calls can be found here:

https://forum-en.guildwars2.com/forum/community/api/API-Documentation 
https://api.guildwars2.com/v1/map_names.json 
https://api.guildwars2.com/v1/world_names.json

Last note: If the program appears to be broken, download this json file 
and save it in the home directory. The events file needs to be updated 
when new events are added to the game. 
https://api.guildwars2.com/v1/event_names.json
