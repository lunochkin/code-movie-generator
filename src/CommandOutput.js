import React from 'react'


export default ({script}) =>
  <div className="command-output container">
    <div className="container-title">Command output</div>
    <div className="container-body">
      <div className="code-output">{script}</div>
    </div>
  </div>
