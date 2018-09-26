import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchNote } from '../../actions';
const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #c8c7c8;
  font-size: 18px;
  width: 100%;
  background: white;
  margin-bottom: 25px;
  padding: 5px 15px 20px 15px;
`;

const NoteTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  border-bottom: solid 1px black;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

class NoteView extends Component {
  state = {
    tags: [],
    title: '',
    textBody: ''
  };
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
    // console.log(`Match Params: ${this.props.match.params.id}`);
    this.setState({
      tags: this.state.tags,
      title: this.state.title,
      textBody: this.state.textBody
    });
    console.log(`State: ${this.props.note}`);
  }

  render() {
    return (
      <NoteWrapper className="NoteList">
        <NoteTitle className="note-title">{this.state.title}</NoteTitle>
        <div className="note-textbody">{this.state.textBody}</div>
      </NoteWrapper>
    );
  }
}

const mapStateToProps = state => ({
  note: state.note,
  fetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchNote }
)(NoteView);