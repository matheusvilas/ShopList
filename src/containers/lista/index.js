// @flow
import React from 'react'
import { connect } from 'react-redux'
import Lista from '../../components/lista'

export function ListaContainer() {
  return (
    <Lista text="TESTE LISTA POR PROPS" />
  )
}

const mapStateToProps = reducer => ({
  ...reducer
})

export default connect(
  mapStateToProps
)(ListaContainer)
