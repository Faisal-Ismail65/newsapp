import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps = {
    country : 'us',
    pageSize : '3',
    category: 'science'
  }
  static propTypes = {
    country : PropTypes.string.isRequired,
    pageSize : PropTypes.number.isRequired,
    category : PropTypes.string.isRequired
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09bd9a040b14496e9b746c5baea55560&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading : true
    })
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading : false
    })
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09bd9a040b14496e9b746c5baea55560&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      loading : false
    })
  }
  handleNextClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09bd9a040b14496e9b746c5baea55560&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading : true
      })
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
        loading :false
      })
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsMonkey-Top HeadLines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-2">
          {!this.state.loading && this.state.articles.map(e => <div key={e.url} className="col-md-4 my-3">
            <Newsitem title={e.title ? e.title.slice(0, 40) : ""} description={e.description ? e.description.slice(0, 80) : ""} imgUrl={e.urlToImage ? e.urlToImage : ""} newsUrl={e.url} publishedAt={e.publishedAt} author={e.author} />
          </div>)}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} onClick={this.handlePreviousClick} type="button" className="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News