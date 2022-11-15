import { useKeycloak } from "@react-keycloak/web";

const Welcome = () => {
  const { keycloak } = useKeycloak();

  return (
  <div className="jumbotron">
    <h4>환영합니다. <br/>본 페이지는 Keycloak인증을 React로 구현한 샘플 화면 입니다.</h4>
    <p>로그인 정보가 없을 경우 Keycloak admin화면에서 생성 가능합니다.</p>
    <p>Keycloak User : myuser  ====    LDAP를 통한 사용자 : ldapuser</p>
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
  </div>
  )
}

export default Welcome