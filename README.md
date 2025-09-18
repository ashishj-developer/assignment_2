# User Profiles Application

A React application that dis### Building for Production

When you're ready to deploy the application, create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that you can deploy to any static hosting service.

## Deployment

You can deploy this application to various platforms. Here's how to deploy it to Vercel:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Build the application:
```bash
npm run build
```

3. Deploy to Vercel:
```bash
cd build
vercel --prod
```

Follow the prompts to complete the deployment.

## Project Structure

```
src/
  ├── components/
  │   ├── LoadingSpinner.tsx   # Loading indicator component
  │   ├── LoadingSpinner.css   # Styles for loading spinner
  │   └── UserCard.tsx         # User profile card component
  ├── App.tsx                  # Main application component
  ├── App.css                  # Application styles
  └── index.tsx               # Application entry point
```

## API Integration

The application uses two APIs:

1. JSONPlaceholder API
   - Endpoint: https://jsonplaceholder.typicode.com/users
   - Returns an array of user objects

2. DiceBear Avatars API
   - URL Format: https://avatars.dicebear.com/v2/avataaars/{username}.svg
   - Generates unique avatars based on username

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details profiles in an interactive card layout. The application fetches user data from JSONPlaceholder API and allows users to interact with the profiles through likes, edits, and deletions.

## Features

- Display user profiles in a responsive card layout
- Interactive buttons for each profile card:
  - Like button (heart icon that toggles between outline and solid red)
  - Edit button (opens a modal to modify user details)
  - Delete button (removes the user card with confirmation)
- Loading spinner while fetching data
- Responsive design that works on mobile, tablet, and desktop
- Bootstrap styling with custom animations
- Form validation for editing user details

## Technologies Used

- React with TypeScript
- Bootstrap 4.5.2
- Font Awesome Icons
- JSONPlaceholder API for user data
- DiceBear Avatars API for profile pictures

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
