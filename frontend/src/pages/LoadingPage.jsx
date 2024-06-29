import { Spinner } from "react-bootstrap";

function LoadingPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Spinner animation="grow" />
    </div>
  );
}

export default LoadingPage;
