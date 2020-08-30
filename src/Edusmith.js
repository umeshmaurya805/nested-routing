import React from "react";
import { Student } from "./Student";
import { Instructor } from "./Instructor";
import { EdusmithHome } from "./EdusmithHome";
import { Route } from "react-router-dom";

export const Edusmith = (props) => {
  return (
    <div>
      <Route exact path={props.match.url + "/"} component={EdusmithHome} />
      <Route path={props.match.url + "/instructor"} component={Instructor} />
      <Route path={props.match.url + "/student"} component={Student} />
    </div>
  );
};
