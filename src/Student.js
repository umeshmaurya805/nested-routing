import React from "react";
import { Route } from "react-router-dom";
import { Courses } from "./Courses";
import { Profile } from "./Profile";
import { Change } from "./Change";
export const Student = (props) => {
  return (
    <div>
      <div>
        <hr />
        <h1>{props.match.url}</h1>
        <Route exact path={props.match.url + "/"} component={Profile} />
        <Route path={props.match.url + "/Change"} component={Change} />
        <Route path={props.match.url + "/Courses"} component={Courses} />
      </div>
    </div>
  );
};
