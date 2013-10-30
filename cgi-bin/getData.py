import urllib2;
import sys;
try: import simplejson as json;
except: import json;
print "Content-Type: text/html\n"

class DataGrabber():
	def __init__(self):
		self.events = None;
		self.event_names = None;
		self.final_dict = dict();
		self.final_list = [];

	def go(self):
		self.event_names = self.getEventNames();
		self.pollAPI();
		for event in self.events:
			i = event.itervalues();
			event_id = i.next();
			i.next();
			event_state = i.next();
			self.final_dict[event_id] = [self.event_names[event_id], event_state];
			print self.event_names[event_id], event_state;
		
			
			
	def pollAPI(self):
		try:
			web = urllib2.urlopen("https://api.guildwars2.com/v1/events.json?world_id=1012&map_id=15",timeout = 1);
		except:
			raise Exception("Could not retrieve data from API.") 	
		self.events = json.load(web)['events'];
		web.close();


	def getEventNames(self):
		event_file = open("event_names.json", "r");
		event_list = json.load(event_file);
		event_file.close();
		dic = dict();
		for item in event_list:
			dic[item['id']] = item['name'];
		return dic;

def main():
	grabber = DataGrabber();
	grabber.go();

if __name__ == "__main__":
	main();
