# April 12th Notes

### React

- **Overview**: React is a declarative, efficient, and flexible JavaScript library for building user interfaces, primarily maintained by Facebook.
- **Key Differences from HTML, CSS, and Vanilla JavaScript**:
  - **JSX**: Allows embedding HTML within JavaScript, with the convenience of JavaScript's power.
  - **Virtual DOM**: Optimizes DOM manipulation, leading to better performance.
  - **Component-Based Architecture**: Encapsulates UI parts into self-sustained, reusable components.
- **Use Cases**:
  - Single-page applications (SPAs)
  - Complex interactive user interfaces across web and mobile platforms

### React Components

- **Overview**: Components are the building blocks of any React application, encapsulating rendering logic and state management.
- **Types**:
  - **Class Components**: More traditional, use lifecycle methods and state.
  - **Functional Components**: Modern approach, use React hooks for state and side effects.
- **Key Concepts**:
  - **Props**: Read-only data passed to components.
  - **State**: Data that changes over time within a component.

### React Router

- **Overview**: A routing library for React that enables the navigation among views of various components in a React Application, handling the URL changes as applications view changes.
- **Key Features**:
  - **Dynamic Routing**: Configured dynamically in the component render logic.
  - **Hooks**: Use custom hooks like `useParams`, `useLocation` for building navigation functionality.
- **Use Cases**:
  - SPAs where different views are required without reloading the page.

### React Hooks

- **Overview**: Hooks are functions that let you hook into React state and lifecycle features from function components.
- **Common Hooks**:
  - **useState**: Lets you add React state to function components.
  - **useEffect**: Lets you perform side effects in function components.
  - **useContext**: Lets you subscribe to React context without introducing nesting.
- **Benefits**:
  - Makes it easier to reuse stateful logic between components.
  - Reduces the complexity of components by avoiding classes.

### Frameworks: Vite and Next.js

- **Vite**:
  - **Overview**: A modern, faster front-end build tool that leverages native ES module imports during development, serving code via Vite's dev server.
  - **Key Features**: Instant server start and hot module replacement (HMR).
  - **Use Cases**: Ideal for projects where speed is a priority in development workflow.
- **Next.js**:
  - **Overview**: A React framework for production, it allows for server-side rendering and generating static websites from React components.
  - **Key Features**: Automatic code splitting, page-based routing, and built-in CSS support.
  - **Use Cases**: Projects that need SEO, better performance, or server-side rendering capabilities.

### Additional Considerations

- **Performance Optimization**:
  - Use React.memo and useCallback to avoid unnecessary renders.
  - Lazy loading components with React.lazy and Suspense.
- **Accessibility (a11y)**:
  - Ensure accessible UI components for all users, leveraging semantic HTML and ARIA roles with React.