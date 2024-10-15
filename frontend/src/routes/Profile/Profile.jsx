import { useLocation } from "react-router-dom";
import ContainerRow from "../../compontents/ContainerRow/ContainerRow";
import AuthorInfo from "../../compontents/AuthorInfo/AuthorInfo";

function Profile() {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="profile-page">
      <div className="user-info">
        <ContainerRow>
          <AuthorInfo />
        </ContainerRow>
      </div>
    </div>
  );
}

export default Profile;
