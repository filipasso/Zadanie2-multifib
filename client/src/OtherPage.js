import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <table>
        <tr>Filip Piskorski</tr>
        <tr>Zadanie 2</tr>
        <tr>I2S 2.3</tr>
      </table>
      <Link to="/">Go back home</Link>
    </div>
  );
};
