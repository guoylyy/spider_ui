import { Component } from 'react';
import fetchApi from '../../tools/request'

class BaseComponent extends Component {
    constructor(props) {
        super(props)
        this.fetchApi = fetchApi;
    }
}

export default BaseComponent;