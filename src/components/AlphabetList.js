import React from "react";
import PropTypes from "prop-types";
import AlphabetBlock from "./AlphabetBlock/";

const AlphabetList = (props) => {
  let alphabets = {};
  for (let char = 10; char < 35; char++) {
    alphabets[char.toString(36).toUpperCase()] = [];
  }
  Object.values(props.users).forEach((user) =>
    alphabets[user.lastName[0].toUpperCase()].push(user)
  );
  alphabets = Object.entries(alphabets).map(([key, value], idx) => (
    <AlphabetBlock key={idx} title={key} users={value} />
  ));

  return (
    <div>
      <h2 className="text-center">Employees</h2>
      {alphabets}
    </div>
  );
};

AlphabetList.propTypes = {
  employees: PropTypes.object,
};

export default AlphabetList;
