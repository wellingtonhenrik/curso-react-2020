import React from 'react'
import ProdutoService from '../app/produtoService'

export default (props) => (
    <div className="card">
        <div className="card-header">
            {props.header}
        </div>
        <div className="card-body">
            {props.children}
        </div>

    </div>
)