// import { Link } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import React, { useState, useEffect } from "react"

const Menu = () => {
  const { keycloak } = useKeycloak();
  const [data, setData] = useState({})

  useEffect(() => {
    keycloak.loadUserProfile()
    .then(function(profile) {
        // console.log(JSON.stringify(profile, null, "  "))
        setData(JSON.stringify(profile, null, "  "))
        console.log(data)
    }).catch(function() {
        alert('Failed to load user profile');
    });
},[])

  return (
    <div className="container">
      <div >
        <p className="" >사용자 이름 : { keycloak.tokenParsed.preferred_username}</p>
        <p className="" >First Name : { keycloak.tokenParsed.given_name}</p>
        <p className="" >Last  Name : { keycloak.tokenParsed.family_name}</p>
        <p className="" >scope : { keycloak.tokenParsed.scope}</p>
        <p className="" >exp (토큰유효시간): { keycloak.tokenParsed.exp}</p>
        <p className="" >iat (토큰유효시간): { keycloak.tokenParsed.iat}</p>
        <p className="" >auth_time (토큰발급시간) : { keycloak.tokenParsed.auth_time}</p>
        <p className="" >jti : { keycloak.tokenParsed.jti}</p>
        <p className="" >iss (발급된URL ) : { keycloak.tokenParsed.iss}</p>    
        <p className="" >aud (발급대상) : { keycloak.tokenParsed.aud}</p>
        <p className="" >sub (사용자ID): { keycloak.tokenParsed.sub}</p>
        <p className="" >typ : { keycloak.tokenParsed.typ}</p>
        <p className="" >azp (Client name) : { keycloak.tokenParsed.azp}</p>
        <p className="" >session_state : { keycloak.tokenParsed.session_state}</p>   
        <p className="" >sid : { keycloak.tokenParsed.sid}</p>   
        <p className="" >at_hash : { keycloak.tokenParsed.at_hash}</p>   
        <p className="" >email_verified : { keycloak.tokenParsed.email_verified}</p>   
        <p className="" >name : { keycloak.tokenParsed.name}</p>   
        <p className="" >acr : { keycloak.tokenParsed.acr}</p>           

        {/* {exp, iat, auth_time, jti, iss, aud, sub, typ, azp, nonce, session_state, at_hash, 
          acr, sid, email_verified, name, preferred_username, given_name, family_name}). */}

<p className="lead">==============tokenParsed END ==========================</p>
        <p className="" > subject (사용자ID): { keycloak.subject }</p>

        <p className="" > 사용자 속성값: {data.id}</p>


        <p>idToken 정보</p>
        <textarea cols="80" rows="8" value={keycloak.idToken} readOnly>
        </textarea>

        <p>token 정보</p>
        <textarea cols="80" rows="8" value={keycloak.token} readOnly>
        </textarea>
        </div>
      </div>      
   )
}
export default Menu