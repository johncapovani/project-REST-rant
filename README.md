# Project REST-Rant

REST-Rant is an app where users can review restaurants.


As a fellow restaurant goer, there are certain factors that are required when deciding if the dining options on the radar are good ones. Menus, reviews, location, and prices are all important aspects of finding that perfect restaurant to spend your hard-earned money at.

 Color Scheme: Contemparary Coffee Color Palette

 | **Method** | **Path**         | **Purpose**                                      |
|------------|------------------|--------------------------------------------------|
| **GET**    | /                | Home page                                        |
| **GET**    | /places          | Places index page                                |
| **POST**   | /places          | Create new place                                 |
| **GET**    | /places/new      | Form page for creating a new place               |
| **GET**    | /places/:id      | Details about a particular place                 |
| **PUT**    | /places/:id      | Update a particular place                        |
| **GET**    | /places/:id/edit | Form page for editing an existing place          |
| **DELETE** | /places/:id      | Delete a particular place                        |
| **POST**   | /places/:id/rant | Create a rant (comment) about a particular place |


Data below will be database stored. 

| Places data for Restraunts |
|----------------------------|
| City                       |
| State                      |
| Address                    |
| Zip Code                   |
| Food                       |
| Photo of Restraunt         |
| Photo of Food              |
| Restaurants Email          |
| Restaurants Phone          |
