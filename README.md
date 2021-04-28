# CodingTaskRepo
Coding Task Repository for maintaining available movies list for users

CodingTask

BackEnd - Built in .net core IDE(Visual Studio)
After cloning the repo,
Open : $home directory\source\repos\CodingTaskRepo\CodingTask in command prompt
Please run the command: dotnet run
You will see  Now listening on: https://localhost:5001 command which kick starts the web service

Endpoints:
https://localhost:5001/api/v1/Movie/Movies --> Fetches available movies list
https://localhost:5001/api/v1/Movie/Search?titleTerm=the%20Chamber --> Fetches searched movies based on titleTerm input as querystring
Tests are available at CodingTask.Tests folder.

FrontEnd - Built in Angular 10 IDE(Visual Studio Code)
Please open  C:\Users\GURURAJ HEGDE\source\repos\CodingTaskRepo\CodingTask\ClientAp
Please run the command: npm run start - which launches the application at https://localhost:4200
https://localhost:4200 --> Fetches available movies list into a grid
https://localhost:4200/home -->Fetches available movies list into a grid
Click on ViewDetails
Navigates to 
https://localhost:4200/details/{movieId} --> Fetches details for selected movie
There is a navigation to Home as well


