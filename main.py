#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import cgi
import webapp2
#import random
import os
from google.appengine.ext.webapp import template
import datetime
#import urllib
from google.appengine.ext import db
from google.appengine.api import mail
#import urllib2
import pprint # for var dumping
#import json
#import sys
import logging



# Landing function
class MainHandler(webapp2.RequestHandler):
	def get(self):	
		
		templateValues = {'placeholder':'Enter Human Language'}
		path = os.path.join(os.path.dirname(__file__), 'main.html')
#		path = os.path.join(os.path.dirname(__file__), 'base.html')
		self.response.out.write(template.render(path, templateValues))

# Landing function
class JobsHandler(webapp2.RequestHandler):
	def get(self):	
		templateValues = {'placeholder':'Enter Human Language'}
		path = os.path.join(os.path.dirname(__file__), 'jobs.html')
		self.response.out.write(template.render(path, templateValues))


# Email 		
class EmailHandler(webapp2.RequestHandler):
    def post(self):
		email = self.request.get('email')
		logging.info(email)
		message = mail.EmailMessage(sender="khabich@gmail.com",subject='[roybiv.net] Contact Form')
		message.to = "kevin.h@roybiv.net"
		message.body = ''+email+' send a message = '+self.request.get('body')
		message.send()
		#	self.redirect("/#contact")

app = webapp2.WSGIApplication([
	('/email', EmailHandler),    
	('/jobs', JobsHandler),    
	('/', MainHandler)
	
], debug=True)

