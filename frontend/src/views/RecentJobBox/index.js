import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Link,
} from "@mui/material";
import axios from "axios";

const RecentJobsBox = () => {
  const [recentJobs, setRecentJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecentJobs = async () => {
    try {
      const response = await axios.get("/posts/getAllPosts"); // Change this to your actual endpoint for recent posts
      if (Array.isArray(response.data)) {
        // Sort jobs based on createdAt field in descending order
        const sortedJobs = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setRecentJobs(sortedJobs.slice(0, 4)); // Take the first 4 recent jobs
      } else {
        console.error("Error fetching recent jobs", response);
      }
    } catch (error) {
      console.error("Error fetching recent jobs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentJobs();
  }, []);

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  return (
    <Card className="recent-jobs-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Jobs
        </Typography>

        <hr className="job-divider" />
        {recentJobs.map((job, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <Typography variant="body1" color="textPrimary">
              {job.title}
            </Typography>
            <Typography variant="caption" color="gray">
              {new Date(job.createdAt).toLocaleString("default", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {job.description}
            </Typography>
            <Typography variant="button" color="textSecondary">
              Pay: ${job.pay} : {job.type}
            </Typography>
            <hr className="job-divider" />
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link href="/recent-jobs" variant="body2" color="primary">
            View All Recent Jobs
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentJobsBox;
