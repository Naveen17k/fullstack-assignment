## React Assignment

1. How can you implement shared functionality across a component tree?
Answer : 
Context Api :
i would use useContext if the card data needed to be accessed by multiple, unrelated components across different parts of the application, or if we needed to avoid prop drilling through many levels of components.

Custom Hook (current approach):
A custom hook is more appropriate here because we're dealing with localized data fetching and state management within the HelpCenter component. The data fetching logic is specific to this component and doesn't need to be shared across the entire application.


2. Why is the `useState` hook appropriate for handling state in a complex component?

Local state management: It allows us to manage local state within the component, such as the search query and filtered data.

Independent state updates: We can update different pieces of state independently (e.g., searchQuery and filteredData) without affecting other parts of the component.

Simplicity: It provides a simple and intuitive way to declare and update state, making the code easier to read and maintain.

Re-render triggering: When state updates, it automatically triggers a re-render of the component, ensuring our UI stays in sync with the data.

Functional component compatibility: It enables us to use state in functional components, aligning with modern React practices.



3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
