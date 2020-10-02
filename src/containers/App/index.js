import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from 'styled-components'

import AddMember from '../../components/addMember'

import { requestApiData } from "../../redux-saga/actions";

const Container = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 5em;
`;

class App extends React.Component {
    componentDidMount() {
        this.props.requestApiData();
    }

    render() {
        console.log(this.props.data)
        const { loading, payload } = this.props.data;
        return (
            <Container>
                <AddMember />
                &nbsp;
                {!loading ? (
                    <div>
                        <h1>Members</h1>
                        {payload.map(member => {
                            return (
                                <div key={member._id} style={{ alignItems: "center", display: "flex", flexDirection: 'column' }}>
                                    <img style={{ width: '8em' }} alt="MemberImage" src={member.memberImage} />
                                    <div>
                                        {member.name}</div>
                                </div>
                            )
                        })}
                    </div>)
                    :
                    <div>Loading</div>}
            </Container>
        )
    }
}

const mapStateToProps = state => ({ data: state.member });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestApiData }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);