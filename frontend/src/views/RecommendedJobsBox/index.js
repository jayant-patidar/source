import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Link,
  Chip,
} from "@mui/material";
import axios from "axios";
import "./index.css";

const RecommendedJobsBox = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const response = await axios.get("/posts/getAllPosts");
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
    <Card className="recommended-jobs-box">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recommended Jobs
        </Typography>

        <hr className="job-divider" />
        {jobs.slice(0, 3).map((job, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div className="recommended-jobHeader">
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
                <Typography variant="body1" className="job-title">
                  {job.title}
                </Typography>
              </Link>{" "}
              <Chip label={`${job.category}`} className="jobCategory" />
            </div>
            <Typography variant="body2" className="job-description">
              {job.description}
            </Typography>
            <Typography variant="body2" className="job-pay-type">
              Pay: ${job.updatedPay?.[0]?.pay || job.originalPay} : {job.type}
            </Typography>
            <hr className="job-divider" />
          </div>
        ))}
        <div className="view-all-jobs">
          <Link href="/all-recommended-jobs" variant="body2" color="primary">
            View All Recommended Jobs
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedJobsBox;
