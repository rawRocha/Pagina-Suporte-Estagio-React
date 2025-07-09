import Menu from "../../components/Menu/Menu";
import welcomeImage from "../../assets/undraw_welcoming_42an.svg";

const Dashboard = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 text-center">
            <div className="image-container mt-4 mb-4">
              <img
                src={welcomeImage}
                alt="Ilustração de boas-vindas"
                className="img-fluid rounded"
                style={{
                  width: "70%",
                }}
              />
            </div>

            <p className="text-muted mt-3">
              Bem-vindo ao seu painel administrativo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
