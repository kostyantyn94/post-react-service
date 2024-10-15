import ContainerRow from "../compontents/ContainerRow/ContainerRow";
import SettingsForm from "../compontents/SettingsForm/SettingsForm";

function Settings() {
  return (
    <div className="setting-page">
      <ContainerRow type="page">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Your Settings</h1>
          <SettingsForm />
        </div>
      </ContainerRow>
    </div>
  );
}

export default Settings;
