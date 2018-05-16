from random import randrange
import urllib
import tweepy
import time
import random

CONSUMER_KEY = "xxx"
CONSUMER_SECRET = "xxx"

ACCESS_TOKEN = "xxx"
ACCESS_TOKEN_SECRET = "xxx"

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET) 
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET) 

api = tweepy.API(auth) 

def get_link(x):
    page = urllib.urlopen(x)
    return page.geturl()
randomLink = get_link('https://en.wikipedia.org/wiki/Special:Random')

phraseList = ["Thought provoking...", "UHM!! Really .. uh...", "Did you know?", "SO CRAZY MUST CLICK THE LINK BELOW", "The more you know...", "GEE WIZ.. you MUST SEE", "SMH! ... "] 

randomPhrase = randrange(0, len(phraseList))
 
api.update_status("i am a bot but my opinion matters !! enjoy this random article because ... " + phraseList[randomPhrase] + randomLink)

