# Lunchester

This repository contains the code for the Lunchester app. This app will make it easier for companies to manage their lunch. It will track which items are in stock and which items should be ordered. The app will automaticly make a shopping list and order the groceries that are needed for the next lunch. 

## Getting Started
These instructions will get you a copy of the project up and running on your development enviroment.

### Prerequisites

Make sure you have installed all of the following prerequisites on your development enviroment:
- git
- npm or yarn
- json-server

### Setup

The recommended way to setup this project is to use git to directly clone this repository to your development enviroment:
```
$ git clone https://github.com/Lunchester/Lunchester.git
```
You could also download it as a ZIP file and unpack it.

Next, navigate to the current folder:
```
$ cd lunchester
```
Install the npm packages:
```
$ npm install
```
Install json-server if you haven't already:
```
$ npm install -g json-server
```
Tell json-server to start our mock database:
```
$ json-server --watch database.json
```
Spin up our project at localhost:
```
$ npm run serve
```
That's it! Our project should be live at `http://localhost:8080`

## Authors

- **Vincent van Deursen** 
- **Bram Vos** 
- **Tobin Stultiens** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
