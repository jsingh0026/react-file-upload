import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const AddButton = styled.button`
    width: 100%;
    border-radius: 3px;
    border: 1px solid;
`

function index() {
    return (
        <div>
            <h1>Add Member</h1>
            Name: <Input type="text"/>
            <br/>
            Add Image: <button>upload</button>
            <br/>
            <br/>
            <AddButton >Add Member</AddButton>
        </div>
    )
}

export default index
