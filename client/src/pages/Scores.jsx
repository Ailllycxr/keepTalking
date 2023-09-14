import { QUERY_SCORES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Card from "react-bootstrap/Card";

export default function Scores() {
  //fetchPolicy re-queries db every time scores is loaded, rather than letting it check the cache.
  //this stops an issue where new scores weren't displaying without a refresh of the page.
  const { data, loading } = useQuery(QUERY_SCORES, {
    fetchPolicy: "network-only",
  });
  // TODO? Limit how many scores are shown

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <h2>Top Scores</h2>
      {data
        ? data.scores.map((score, index) => (
            <div
              className="d-flex justify-content-center align-items-center flex-row"
              key={score._id}
            >
              <Card
                className={
                  `justify-content-between align-items-center flex-row` +
                  (index < 3 ? " card-effect" : " card-board")
                }
                style={{ width: "70%", height: "1px", margin: "5px" }}
              >
                <div className="col-4"> {index + 1}</div>
                <div className="col-4 text-left">
                  {" "}
                  {score.user.username}: {score.score}{" "}
                </div>
                <div className="col-4 text-center purple-text">
                  {" "}
                  With help from: {score.teammates}
                </div>
              </Card>
            </div>
          ))
        : null}
    </>
  );
}
