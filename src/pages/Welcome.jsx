import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  const hyenmood = () => {
    window.open('https://www.hyenmood.com', '_blank');
  }
  const Login = () => {
    navigate("/login");
  }  
  return (
  <div className="jumbotron">
    <h4>환영합니다. <br/>본 페이지는 Keycloak인증을 React로 구현한 샘플 화면 입니다.</h4>
    <p>로그인 정보가 없을 경우 Keycloak admin화면에서 생성 가능합니다.</p>
    <p>Keycloak User : chooya  </p>
    <p>localhost와 hyenmood.com 과 인증 연계(완료)</p>
    <p>구글 OAuth2 로 로그인(완료)</p>
    <p>카카오 OIDC  로그인 구현(완료)</p> 
    <p> 별도 로그인 화면 구현 ( 진행중 )</p>
    <p>네이버 로그인 구현</p> 
    <p>JAVA환경에서 구현 및 인증 연계</p>   
    <p> --- </p>         
    <p className="lead">
      { !keycloak.authenticated ? '로그인을 해주세요!' : '로그인되었습니다.' }
    </p>
    <p>
      {!keycloak.authenticated && (
          <button className="btn btn-lg btn-warning" 
            onClick={() => keycloak.login()}>Login
          </button>
        )}
       {!!keycloak.authenticated && (
          <button className="btn btn-lg btn-warning" 
            onClick={() => keycloak.logout()}>Logout
          </button>
        )}     
       
    </p>
    <p>
    {!keycloak.authenticated && (
          <button className="btn btn-lg btn-warning" 
          onClick={() => Login()}>별도 로그인 화면 
        </button>
      )}     
    </p>   
    <p>     
    {!!keycloak.authenticated && (
          <button className="btn btn-lg btn-warning" 
          onClick={() => hyenmood()}>링크열기(hyenmood 링크)
        </button>
      )}     
    </p>
  </div>
  )
}

export default Welcome