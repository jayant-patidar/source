import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Avatar } from "@mui/material";

const Todo = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <ul>
        <li>job post box</li>
        <li>Card design</li>
        <li>location request</li>
        <li> sort and filter</li>
        <li> add ratings to cards</li>
        <li>user schema: add private mode</li>
        <li>user id validation</li>
        <li>negotiate the price</li>
        <li>
          post model
          <ul>
            <li>title</li>
            <li>description</li>
            <li>providerId</li>
            <li>seekerId</li>
            <li>jobDate</li>
            <li>jobTime</li>
            <li>pay</li>
            <li>location</li>
            <li>preRequisite</li>
            <li>category</li>
            <li>status</li>
            <li>type</li>
            <li>createdAt</li>
            <li>updatedAt</li>
            <li>tags</li>
            <li></li>
            <li>general location</li>
            <li>precise location</li>
            <li>negotiable?</li>
            <li>job date and time</li>
            <li>expiration date and time</li>
            <li></li>
          </ul>
        </li>
        <li>original pay and updated pay</li>
        <li>user profile sections</li>
        <li>search feature</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Todo;
