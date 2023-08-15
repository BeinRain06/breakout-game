# Breakout Game

Sideland : **## Breakout Game**

> ### Overview :

- small app to enjoy free time. Break bricks with a bouncing ball!

## Interest

You might be interested on how:

- **canvas** a free to use online graphic design tool to create presentations, logo, posters and more
-
- or **requestAnimationFrame** , the equivalent of state( in React) to repaint the dom using plain javascript...

### Links

- Solution URL: [https://github.com/BeinRain06/breakout-game.git](https://github.com/BeinRain06/breakout-game.git)
- Live Site URL: [https://beinrain06.github.io/breakout-game/](https://beinrain06.github.io/breakout-game/)

## Description : \* challenge issue

**draw score**

> I still now i got trouble to stick the **score drawing** laying at the top right of my canvas shape. Sometimes it appears and others it doesn't. Have not yet figure out why that happens
>
> **end game message**
>
> Have not be able to stop the game with a end message, still minding . The goal is to throw an end message on the screen when the ball hit the bottom of the canvas wall, stop the game, and restart it, if the player hit a button `Play Again`,

## Javascript structure:

> - two main components `index.js`, `breakkout,js`

## css structure:

> style.css

**Picture**

---

![./ Mobile-Breakout-Game.png](./Mobile-Breakout-Game.png)

---

# What I learned

### First time using webpack

i learn basic configuration with `webpack` **frontend environment**. How to use **web.confg.js** file to set parameters as :

- **loaders** (css-loader, style-loaders)
- add **plugin** to use extra features of webpack ( mini-css-extract-plugin, html-webpack-plugin)
- configure the **scripts** for the **development mode** and the **production mode**
- set **webpack live development server**

### First time using webpack

I also earn about **requestAnimationFrame** . Do you knoow that we can repaint our dom using plain javascript.
What i means by repaint our DOM is to re-render the content of our dom without using a framework.

To do that, we use this method **requestAnimationFrame** to tell the document object that be ready i will send you that **functions** that you need to execute before you **repaint** the dom.

- In our case this function is the function we called **update** : `requestAnimationFrame(update)` and we do it recursively to keep track the change of the DOM. It is why this function is called inside the earlier named function `update`.

### Mobile Responsiveness

    - Mobile reponsiveness for mobile max-width: 320px ,max-width: 626px,

**Picture**

---

![./Desktop-Breakout-Game.png](./Desktop-Breakout-Game.png)

---

## Callback History:

- **bounce game** is popular in the tetris game in the growing age of 2D Game . X-axis , Y-axis. It still give a fun to play to it . It's a kind like playing tennis but with a boundary opponent. You Guess! => `canvas wall`. That's right.

## Useful Resources :

- wittcode[youtube]: [https://www.youtube.com/watch?v=h3LpsM42s5o](https://www.youtube.com/watch?v=h3LpsM42s5o) : learn about webpack and setting for **react** app instead of using the basic configuration given by the command line `create-react-app`;

- brad traversy[youtube] : [https://www.youtube.com/watch?v=IZGNcSuwBZs&t=458s](https://www.youtube.com/watch?v=IZGNcSuwBZs&t=458s) : With this article we learn how to configure basically our **front end environment** using **webpack**. A great resource.

- medium.com[lucas Miranda]: [https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258](https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258) : very helpfuk resource to Try Canvas with react.js(also have a related article `Animating a Canvas with React Hooks`)

- pluralsight[Marques Woodson]: [https://www.pluralsight.com/guides/event-listeners-in-react-components](https://www.pluralsight.com/guides/event-listeners-in-react-components) : use **eventListeners** in react. This small article go through the way of using event like `keydown` in react.

## Acknowledge:

This project always remember the Team :

-Brad Traversy: vanilla javascript course on udemy, well explain our game

_Our Work always remember this team_

- `Brad Traversy` for his tutorial and use of vanilla course
  >
- `WittCode` with his easy explanation how works webpack with **React**
  >
- `Marques Woodson` for this such simple and concise article about using **evenlisteners** in React.
  >
- `Lucas Miranda` , it was mmersive how to build Cnavas to React. Thank you, you have detailed the process with each step. That make it Great!

## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/BeinRain06](https://www.frontendmentor.io/profile/BeinRain06)
- Twitter - [https://twitter.com/nest_Ngoueni](https://twitter.com/nest_Ngoueni)
