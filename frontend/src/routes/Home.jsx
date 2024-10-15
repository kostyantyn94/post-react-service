import { Outlet } from "react-router-dom";
import BannerContainer from "../compontents/BannerContainer";
import ContainerRow from "../compontents/ContainerRow/ContainerRow";
import FeedToggler from "../compontents/FeedToggler";
import PopularTags from "../compontents/PopularTags";
import { useAuth } from "../context/AuthContext";
import FeedProvider from "../context/FeedContext";

function Home() {
  const { isAuth } = useAuth();

  return (
    <div className="home-page">
      {!isAuth && (
        <BannerContainer>
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </BannerContainer>
      )}

      <ContainerRow type="page">
        <FeedProvider>
          <div className="col-md-9">
            <FeedToggler />
            <Outlet />
          </div>
          <PopularTags />
        </FeedProvider>
      </ContainerRow>
    </div>
  );
}

export default Home;
