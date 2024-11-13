import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Link,
} from "@mui/material";
import axios from "axios";
import "./index.css";

const RecentJobsBox = () => {
  const [recentJobs, setRecentJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchRecentJobs = async () => {
    try {
      const response = await axios.get("/posts/getAllPosts");
      if (Array.isArray(response.data)) {
        // Sort jobs based on createdAt field in descending order
        const sortedJobs = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setRecentJobs(sortedJobs.slice(0, 4));
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
    <Card className="recent-jobs-box">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Jobs
        </Typography>

        <hr className="job-divider" />
        {recentJobs.map((job, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <Link
              component="button"
              onClick={() => {
                navigate(`/job/${job._id}`);
              }}
              style={{
                textDecoration: "underline",
                color: "black",
                textAlign: "left",
              }}
            >
              <Typography variant="body1" color="textPrimary">
                {job.title}
              </Typography>
            </Link>
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
            <Typography variant="body2" color="textSecondary">
              Pay: ${job.updatedPay?.[0]?.pay || job.originalPay} : {job.type}
            </Typography>
            <hr className="job-divider" />
          </div>
        ))}
        <div className="view-all-jobs">
          <Link href="/all-recent-jobs" variant="body2" color="primary">
            View All Recent Jobs
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentJobsBox;
