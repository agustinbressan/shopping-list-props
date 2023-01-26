# Shopping List app series (share state via props approach)
This project is a 'To Do list' like app created with `ReactJs` to implement and practice different state management approaches and the DOM testing with `React Testing Library`.

In this approach I'm placing the items list state in a parent component and then pass it down to the child components via [`props`](https://beta.reactjs.org/learn/sharing-state-between-components).

See the other state management approaches:
- Using hooks:
    - [shopping-list-useReducer](https://github.com/agustinbressan/shopping-list-useReducer)
    - [shopping-list-useContext](https://github.com/agustinbressan/shopping-list-useContext)

## How the App works
The Shopping list app has 2 small sections with the following features:
1) Add new item section:\
    With a small form the user can write a text description for the new item and add it to the list by clicking on the 'Add item' button or by submitting the form (press Enter in the keyboad).\
    To add a new item the description cannot be empty. An small validation is added for this case just for testing purpose (The button is disabled and also the add action is not executed).
2) Items List section\
    The Items list has 2 counters at the end of the title where the 1st number shows the 'Crossout items' and a 2nd one shows the "Total items count". When all the items in the list are marked as "Crossout" the title shows an extra "All done" message at the end.\
    If the list is empty an empty-state message will be displayed in the list.\
    The user can "Crossout", "Delete" and "Restore" existing items.\
    The actions will be displayed next to the item description in the list.\
    When an item is marked as "Crossout" the description text styles change to be crossout and greyout. And when the item is "Restore" the styles returns to the initial state. This actions will also update the list title counters.\
    The "Delete" feature will permanently removed the item from the list.

## Available Scripts
In the project directory, you can run:

> `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

> `npm test`

Launches the test runner in the interactive watch mode.

## Started from a CRA template
The project was created using the Create React App (CRA) npx command template:
> `npx create-react-app shopping-list`

NOTE: I also made some code clean-ups from the CRA template to keep it simple.

CRA Web link: https://create-react-app.dev/

## Reference Docs links:
ReactJs `Sharing State Between Components` Docs: https://beta.reactjs.org/learn/sharing-state-between-components

React Testing Library (RTL) Docs: https://testing-library.com/docs/react-testing-library/example-intro\
