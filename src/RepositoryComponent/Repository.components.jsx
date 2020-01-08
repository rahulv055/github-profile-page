import React from 'react';
import { connect } from "react-redux";
import { Input, Select } from 'antd';
import RepositoryItem from '../RepositoryComponent/RepositoryItem/repository-item.components';
import { getRepositoryList, searchRepositoryListAction } from '../redux/repository-reducer/repository.action';
import './style.css';
class Repository extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchRepo: "",
            searchRepoType:"",
            searchLanguageType:""
        }
    }

    componentDidMount() {
        this.props.getRepositoryList();
    }

    handleChange=(searchParam)=> {
        this.setState({ searchText: searchParam.target.value });
        this.props.searchRepositoyList(searchParam.target.value);
    }

    render() {
        const { repositoryList } = this.props;
        const { Option } = Select;
        return (
            <div>
                <div style={{ display: "flex", marginBottom: 20 }}>
                    <div>
                        <Input placeholder="Search Repositories..." value={this.state.searchText} onChange={(searchParam) => this.handleChange(searchParam)} style={{ width: 500 }} onChange={this.handleChange} />
                    </div>
                    <div>
                        <Select defaultValue="All" style={{ width: 100, marginLeft: 20, backgroundColor: '#b8d8ff' }} >
                            <Option value="All">All</Option>
                            <Option value="Public">Public</Option>
                            <Option value="Private">Private</Option>
                            <Option value="Sources">Sources</Option>
                            <Option value="Forks">Forks</Option>
                            <Option value="Archived">Archived</Option>
                            <Option value="Mirrors">Mirrors</Option>
                        </Select>
                    </div>
                    <div>
                        <Select defaultValue="All" style={{ width: 100, marginLeft: 20 }} >
                            <Option value="All">All</Option>
                            <Option value="JavaScript">JavaScript</Option>
                        </Select>
                    </div>
                    <div>
                        <button style={{ width: "100%", backgroundColor: 'green', marginLeft: 20 }}>New </button>
                    </div>
                </div>

                <div style={{ width: "90%" }}>
                    {
                        repositoryList.map(repositoryItem => (
                            <RepositoryItem key={repositoryItem.id} items={repositoryItem} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    repositoryList: state.RepositoryReducer.repositoryList
})

const mapDispatchToprops = dispatch => ({
    getRepositoryList: () => dispatch(getRepositoryList()),
    searchRepositoyList: (searchParam) => dispatch(searchRepositoryListAction(searchParam))
})

export default connect(mapStateToProps, mapDispatchToprops)(Repository);