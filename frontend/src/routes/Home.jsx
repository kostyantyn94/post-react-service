import { Outlet } from "react-router-dom";
import BannerContainer from "../compontents/BannerContainer";
import ContainerRow from "../compontents/ContainerRow/ContainerRow";
import PopularTags from "../compontents/PopularTags";

function Home() {
  const isAuth = false;

  return (
    <div className="home-page">
      {!isAuth && (
        <BannerContainer>
          <h1 className="logo-font">conduit</h1>
          <p>A place to share knowlange</p>
        </BannerContainer>
      )}
      <ContainerRow type="page">
        <div className="col-md-9">
          <Outlet />
        </div>
        <PopularTags />
      </ContainerRow>
    </div>
  );
}

export default Home;
