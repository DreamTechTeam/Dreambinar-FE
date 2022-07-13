import React from 'react'

const Title = ({ set }) => {
  document.title = `${set} | Dreambinar`
  return <React.Fragment />;
}

export default Title