# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


---

## Project Setup Status

All essential steps for setting up this project—including installation of Vite, React, and Tailwind CSS with PostCSS—have been completed. You can proceed directly with development and follow the instructions above to run or build the application. No further setup is required.

---
## User List Page & work done till this commit
User List Project 

This project displays user data in both List and Grid views, with pagination and detailed user pages. Below is a simple explanation of the structure, components, and data flow.
---

## Project Structure & Components

**Navbar**  
- File: src/Components/Navbar.jsx  
- Purpose: Displays navigation links for different pages/routes.  

**Pages**  

**UserList Page**  
- File: src/pages/userList.jsx  
- Purpose: Main page that shows the user data.  
- How it works:  
  - Renders the Navbar at the top.  
  - Renders the List component below the navbar.  

**List Component**  
- File: src/Components/List.jsx  
- Purpose:  
  - Handles switching between List and Grid views.  
  - Fetches user data using Context API.  
  - Passes data to UserTable and GridData components.  
- Features:  
  - Two buttons to toggle between List and Grid view.  
  - Shows user data in the selected view.  
  - Pagination: 10 users per page.  

**UserTable Component**  
- File: src/Components/UserTable.jsx  
- Purpose:  
  - Displays user data in a table format (List view).  
  - Supports pagination (10 users per page).  
- Props:  
  - Receives user data from List via props.  

**GridData Component**  
- File: src/Components/GridData.jsx  
- Purpose:  
  - Displays user data in a grid format (Grid view).  
  - Supports pagination (10 users per page).  
  - Each user card has a "View Details" button.  
- Props:  
  - Receives user data from List via props.  
  - "View Details" navigates to a detailed user page using the user's ID.  

**User Details Page**  
- Purpose:  
  - Shows full details of a selected user.  
  - Accessed via the "View Details" button in the Grid view.  
  - Uses the user ID from the URL params to fetch and display details.  

---

## Data Fetching & Context

**How Data is Fetched**  
- API Key: Stored in src/data/data.js for easy access.  
- Context Setup:  
  - ApiContext.js and ApiContext.jsx are used to create and provide the API context.  
  - ApiProvider fetches data from the API using Axios and stores it in state.  
  - The getData function is called in the List component to fetch user data when the page loads.  

**How Data is Passed**  
- Data fetched in the context is made available to all components using React's Context API.  
- The List component accesses the data using useContext(ApiContext) and passes it as props to UserTable and GridData.  

---

## Component Usage Summary

- **UserList-List**: Main page for displaying user data; handles view switching and data fetching.  
- **UserList-List-UserTable**: Shows user data in a table (List view); handles pagination.  
- **UserList-List-Grid**: Shows user data in a grid (Grid view); handles pagination; "View Details" button for each user.  

---

## Technologies Used

- Vite for fast React setup  
- React JS for building UI components  
- Tailwind CSS for styling  
- PostCSS for processing Tailwind CSS  
- Axios for API requests  
- React Context API for state management and data sharing  

---

## How Everything Works

1. Navbar is shown for navigation.  
2. UserList page loads and shows the List component.  
3. List component fetches user data from the API using Context.  
4. User can switch between List view (UserTable) and Grid view (GridData) using buttons.  
5. Both views show 10 users per page with pagination controls.  
6. In Grid view, clicking "View Details" takes you to a page with full info about that user.  

---



