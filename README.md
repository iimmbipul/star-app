# Star Wars Universe Web Application

This web application displays character details from the Star Wars universe using the swapi.dev API.

## Introduction

Star Wars Universe Web Application is a simple web application built using React,React query, tailwind css. It fetches data from the swapi.dev API to display character details such as name, hair color, eye color, gender, home planet, and the films that the character has appeared in.

## Features

- Display a list of characters from the Star Wars universe
- View detailed information about each character, including their home planet and films they appeared in
- Unit tests using Jest and React Testing Library
- End-to-end tests using cypress

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 20)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd star-app
   npm install
   npm start

2. To run unit test case:

    ```bash
    npm run test

3. To run e2e test case:

    ```bash
    npm run cypress:run (Please ensure npm start is running on another terminal)
you might have to setup cypress for first time using docs : https://docs.cypress.io/guides/getting-started/opening-the-app

