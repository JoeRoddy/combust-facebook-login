import React from "react";

import SocialLoginBtn from "./SocialLoginBtn";

const FacebookLoginBtn = ({ onLogin }) => (
  <SocialLoginBtn backgroundColor="#3b5998" type="Facebook" onLogin={onLogin} />
);

export default FacebookLoginBtn;
