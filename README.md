# source


This project is a MERN stack (MongoDB, Express, React, Node.js) web application designed as a social media-inspired platform where job seekers can write posts detailing tasks or jobs, and job providers can browse, search, sort, and filter these posts. Users interact in a dynamic environment where job providers can show interest in tasks that suit their pay expectations, schedule, equipment, and available resources.

Unique features include the ability for users to negotiate pay, request exact job locations (only available upon seeker approval, as posts display a general location by default), and verify each other’s credibility through mutual reviews provided after each completed job. Future updates will also integrate personal chat, allowing users to communicate directly. This project is still in its early stages, with many more features planned.

## Features

- **Home Page Overview**: The homepage showcases posted jobs, including sections for recommended and recent jobs. Users can easily search, filter, and sort listings to find relevant tasks.
- **Job Listings**: Job seekers can create detailed posts with information such as title, pay, location, job type, and more.
- **Interactive Post Features**: Options to save, share, locate, and express interest in job posts are provided, enhancing engagement and usability.
- **Sort and Filter Options**: Users can sort job listings by date or pay and filter by criteria such as location, type, and pay range.
- **Responsive Design**: The application is optimized for both desktop and mobile viewing, offering a consistent experience across devices.
- **User Ratings**: Seeker ratings, along with the poster's name and post date, are displayed on each job card, helping users assess credibility.
- **Full Job Details**: Clicking on a job title navigates to a detailed page with comprehensive job information and job poster details.
- **User Profiles**: Users can create profiles with relevant information and post listings for small or one-time jobs.



## Project Structure

- `src/`: Root directory for the source code.
  - **assets/**: Contains static assets such as images.
    - `images/`: Stores image files used in the application.
  - **utils/**: Utility components and helpers like Navbar, ScrollToTop, and other common functions.
  - **views/**: Houses the main page views and their respective components.
    - `FullJobDetails/`: Contains the Full Job Details view files.
      - `index.js`: Main component file for displaying full job details.
      - `index.css`: Styling for the Full Job Details view.
    - `Posts/`: Contains the main Posts view files.
      - `index.js`: Main component for displaying job posts.
      - `index.css`: Styling for the Posts view.
    - *(Additional views follow the same structure as above)*: Each view directory contains its `index.js` component and `index.css` for styling.

This structure keeps assets, utility functions, and views organized, promoting modular development and easy maintenance.


## Technology Stack

- **Frontend**: React, MUI (Material UI)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS with MUI components
