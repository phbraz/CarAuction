import React from "react";

const Details = ({ params }: { params: { id: string } }) => {
  return <div>Details {params.id}</div>;
};
export default Details;
