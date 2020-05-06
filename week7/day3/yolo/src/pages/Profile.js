import React from "react";
import queryS from "query-string";

function Profile(props) {
  const values = queryS.parse(props.location.search);
  return (
    <div>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}

export default Profile;
