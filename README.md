# source


This project is a MERN stack (MongoDB, Express, React, Node.js) web application designed as a social media-inspired platform where job seekers can write posts detailing tasks or jobs, and job providers can browse, search, sort, and filter these posts. Users interact in a dynamic environment where job providers can show interest in tasks that suit their pay expectations, schedule, equipment, and available resources.

Unique features include the ability for users to negotiate pay, request exact job locations (only available upon seeker approval, as posts display a general location by default), and verify each other’s credibility through mutual reviews provided after each completed job. Future updates will also integrate personal chat, allowing users to communicate directly. This project is still in its early stages, with many more features planned.

## Features

- **User Profiles**: Users can create profiles with relevant information and post small or one-time job listings.
- **Job Listings**: Job providers can post jobs, including details like title, pay, location, job type, and more.
- **Filter and Sort Options**: Users can sort by date posted or pay, and filter by location, type, and pay range.
- **Responsive Design**: Optimized for desktop and mobile viewing.
- **Interactive Post Features**: Options to save, share, locate, and express interest in a job post.
- **User Ratings**: Display seeker ratings, along with the poster's name and posting date on each job card.
- **Full Job Details**: Clicking on a job title navigates to a detailed page showing complete job information and job poster details.

## Project Structure

- `src/components`: Contains all the React components for the app.
  - **Posts**: The main job post display component.
  - **UserProfileBox**: Component for displaying user profiles.
  - **RecommendedJobsBox**: Component showing job recommendations based on user preferences.
  - **RecentJobsBox**: Displays recently posted jobs.
  - **JobPostForm**: Form for job providers to create a new job post.
- `src/assets`: Stores images and other static assets.

## Technology Stack

- **Frontend**: React, MUI (Material UI)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: Axios for data fetching
- **Styling**: CSS with MUI components
