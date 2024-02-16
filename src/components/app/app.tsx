import MainPage from '../../pages/main/main-page';

type AppProps = {
  placesCount: number;
}

export default function App({placesCount}:AppProps) : JSX.Element {
  return (
    <MainPage placesCount={placesCount}></MainPage>
  );
}
