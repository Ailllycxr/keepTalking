import { useLocation, useRouteError } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Error() {
  const location = useLocation();
  const error = useRouteError();

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card className="bg-dark rounded w-50 justify-content">
          <Card.Header className="rounded bg-white text-center">
            <h1>
              <span className="text-primary">{location.pathname}</span> {error.statusText || error.message}
            </h1>
          </Card.Header>
        </Card>
      </div>
    </>
  )
}
