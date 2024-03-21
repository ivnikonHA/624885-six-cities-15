import './loader-page.css';

function LoadingPage(): JSX.Element {
  return (
    <>
      <p>Loading ...</p>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default LoadingPage;
