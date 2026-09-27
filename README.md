This is a weather app for my school project, the purpose of the project was to learn how to create an application with REACT. The API to fetch the weather data is from http://openweathermap.org. To get your own API key you need to have an account. It can take up to 2 hours for your key to activate.

In this weather app the user can search a city to see the current weather. The user can also get navigated to a more detailed page of the weather for the searched city. There is also a favorites button so the user can save up to 4 favorite cities which will appear on the homepage. So when the user comes back to the page the listed favorites are there. I used web storages API such as localstorage so the users data is saved locally on the computer.

# installation

install dependencies:

```
npm install
```

create .env file in project root based on .env.example:

```
VITE_APP_ID=YOUR_OPENWEATHER_API_KEY
```

Start the dev server:

```
npm run dev
```
