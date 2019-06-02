# Github api data fetching App

It is a small web app using GitHub open source API to search and fetch user profile details using the username.And it's Shows the results in view page. (i used Bootstrap as a CSS library for UI). Also,it handles the error if API fails.

To run this project you have to enter API keys(client_id and client_ ) in your app.js file without this, It shows error. So for error free excusion you have to go through these steps:
1. open this link https://github.com/settings/apps/new and then
2. fill some menedetories form like name of the project, server url(localhost) and all.
3. After filling this hit the create app button and after that it generate 2 keys
4. Copy these key and paste it in app.js file at their respective key name (i guess code line number 9-14, somewhere in it)
5. aAnd then it will execute currectly.

### Users Enter username here.
![Screenshot (102)](https://user-images.githubusercontent.com/34801322/58759007-2ca6ad00-8541-11e9-8df2-10e75f2810c7.png)

### Error message if the username doesn't exist.
![Screenshot (103)](https://user-images.githubusercontent.com/34801322/58759008-2d3f4380-8541-11e9-9585-226c9d72e2f5.png)

### If currect user then it shows the result on screen from API.
![Screenshot (105)](https://user-images.githubusercontent.com/34801322/58759009-2d3f4380-8541-11e9-9cb2-d03a0b3bdd5e.png)

