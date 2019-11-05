import React, {Component} from 'react';
import DetailPresenter from './DetailPresenter';
import {moviesApi} from 'api';
import {tvApi} from 'api';

export default class DetailContainer extends Component {
    constructor(props) {
        super(props);
        const {match: {
                path
            }} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: path.includes('movie')
        };
    }

    componentDidMount = async () => {
        const {
            match: {
                params: {
                    id
                }
            },
            history: {
                push
            }
        } = this.props;
        const {isMovie} = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push('/');
        }
        let result = null;
        try {
            if (isMovie) {
                ({data:result} = await moviesApi.movieDetail(parsedId));
            } else {
                ({data:result} = await tvApi.tvDetail(parsedId));
            }
        } catch  {
            this.setState({error: "Can't find anything."});
        } finally {
            this.setState({loading: false, result})
        }
    }

    render() {
        const {result, error, loading} = this.state;
        return <DetailPresenter result={result} error={error} loading={loading}/>;
    }
}
