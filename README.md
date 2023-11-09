# Petrpedia
***THIS REPO IS ARCHIVED—CHECK PETRPEDIA FOR THE CURRENT VERSION!***
## Introduction

Welcome to the Petrpedia!
Petrpedia is a UCI "petr" sticker catalogue that also functions as a trading hub.
The original idea, implementation, and designs started at ZotHacks 2023, hosted by Hack@UCI.

## What is Petr?
"Petr" is an interpretation of the UCI mascot that was released in September 2018 by Qasim, a UCI student who has since graduated.
Since the first release, many other Petr accounts have been created; these remix petr with various different ideas, such as from movies, video games, anime, and more!

<img src="https://scontent.cdninstagram.com/v/t51.2885-15/43252105_187038095554844_1410835837928328792_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44MDB4ODAwLnNkciJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=CSM5o9O_BNUAX_d7PSs&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MTkwMjY1MjQyMzE5NDIyMjI3Nw%3D%3D.2-ccb7-5&oh=00_AfBXavPPi8SYJfvg40Kttu-7O2Bp0xH0OP9lYe2W5rhF5Q&oe=654E36EC&_nc_sid=10d13b" width=200/><img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/61299248_2573839462650276_1354143665798510968_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyIn0&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=qD08gXjlJlIAX_nk0_q&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjA2NDI4NzU1MjczNDc5NzM1Mw%3D%3D.2-ccb7-5&oh=00_AfBQqkgm9NJ_x2evBtLav0F4yllnf1erBisvjURBGtHvAw&oe=654FDCE4&_nc_sid=ee9879" width=200/><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/250353329_936410946960509_7791785628921005265_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyIn0&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=CQkT4M2jM5UAX8SxXaN&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjY5Njg1MDkyOTc1MzcwMTY0Mg%3D%3D.2-ccb7-5&oh=00_AfBrYWJt_EB8w3lI_b6GX1tp19koJ125s1GfLmuRScij8Q&oe=654E7D63&_nc_sid=ee9879" width=200/><img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/46392583_594127507688099_2035162759375179005_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44MDB4ODAwLnNkciJ9&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=ih3jsa_UsgsAX8fnHsr&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MTkzMTI5MjUxOTI0NTcxNDE0Mg%3D%3D.2-ccb7-5&oh=00_AfDiSkR9H3yjrZizE1k48JMImgujBN7S6CXyp3DvkTBWtw&oe=654E1E91&_nc_sid=ee9879" width=200/>

As such, we, the creators of Petrpedia, have decided that we want to contribute to Petr culture by creating an online catalogue/trading hub!

# Classes
We utilized 4 primary classes (and as such, our database had a table representing each).
Because the structure is a database, each class also has an autoincremented ID.

## User
A User is someone using the site. They have a name, email, and a collection of stickers.

## PetrTemplate
A PetrTemplate is the "design" of a certain sticker. When a Petr makes a sticker and posts the design on instagram for example, _that_ is a template. These have a name, creator, number of stickers created, image, and a drop (which drop it is from).

## Sticker
A Sticker is a physical instance of a PetrTemplate. It is something one can actually possess/own and it is part of a user's collection.

## Drop
A Drop is an event in which stickers are given out. These have a location and a name, and templates that are featured at the drop.

# Backend
The backend utilizes FastAPI and an SQLite database. We created GET and POST methods for our API that allows the frontend to communicate with the database; this allows for getting all users, templates, stickers, or drops, or creating these with specified parameters in schemas.py. There are some specific requests that use SQL to query results, such as searching templates by creators, or searching users by email.

# Frontend
The frontend utilizes react.js (and HTML/CSS/JS) to dynamically load pages such as a user page or creator page, by communicating with the backend. Additionally, the dropdowns and other features use GET requests from the backend to autopopulate themselves.

