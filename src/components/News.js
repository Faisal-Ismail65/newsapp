/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) =>  {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
  document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`
  
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=09bd9a040b14496e9b746c5baea55560&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json();
    props.setProgress(60);
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
useEffect(() => {
  updateNews();
}, [])
  
  const fetchMoreData = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=09bd9a040b14496e9b746c5baea55560&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
  }
    return (
      <div className='container my-3'>
        <h2 className='text-center py-4 mt-5'>NewsMonkey-Top {capitalizeFirstLetter(props.category)} HeadLines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row my-2">
            {articles.map(e => <div key={e.url} className="col-md-4 my-3">
              <Newsitem title={e.title ? e.title.slice(0, 40) : ""} description={e.description ? e.description.slice(0, 80) : ""} imgUrl={e.urlToImage ? e.urlToImage : ""} newsUrl={e.url} publishedAt={e.publishedAt} author={e.author} />
            </div>)}
          </div>
          </div>
        </InfiniteScroll>

      </div>
    )
}

News.defaultProps = {
  country: 'us',
  pageSize: '3',
  category: 'science'
}
News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
}

export default News