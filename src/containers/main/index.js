// @flow
import React from 'react'
import { connect } from 'react-redux'
import ListaContainer from '../lista'

function MainContainer() {
  return (
    <ListaContainer />
  )
}

const mapStateToProps = reducer => ({
  ...reducer
})

export default connect(
  mapStateToProps
)(MainContainer)
