# MusicLibrary
There is test task to create simple youtube library
To build and run this project please do next:
1) Run "npm install" in the root folder
2) Run "npm start" in the root folder

Json-server is used to mockup http requests and server side behaviour

What is done?
1) Register new user
2) Sign in and logout. There is no username check, so it is not unique
3) Admin screen that provides the list of all registered users and last visit time
4) Predefined two Albums and two movies inside of each album
5) To open Album details user should lick orange circle button
6) Albums details and movies list will be opened. First movie will start playing automatically
7) Application tracks user activity every time user changes application state(signs in, switches between screens, signs out) 
   and updates "last Visit" property of user entity. 
   It looks like it results to high load but it was made mostly in demo purposes to show skills with REST.

