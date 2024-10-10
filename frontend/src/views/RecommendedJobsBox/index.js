import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Link,
} from "@mui/material";
import axios from "axios";

const RecommendedJobsBox = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("/posts/getAllPosts"); // Change this to your actual endpoint
      if (Array.isArray(response.data)) {
        setJobs(response.data);
      } else {
        console.error("Error fetching jobs", response);
      }
    } catch (error) {
      console.error("Error fetching jobs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  return (
    <Card className="recommended-jobs-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recommended Jobs
        </Typography>

        <hr className="job-divider" />
        {jobs.slice(0, 3).map((job, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <Typography variant="body1" color="textPrimary">
              {job.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {job.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Pay: ${job.pay} : {job.type}
            </Typography>
            <hr className="job-divider" />
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link href="/all-jobs" variant="body2" color="primary">
            View All Jobs
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedJobsBox;
