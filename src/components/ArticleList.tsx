/* eslint-disable */

import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
//import { ComponentProps } from 'lib/component-props';

// type ArticleListProps = ComponentProps & {
//   fields: {
//     heading: Field<string>;
//   };
// };

const ArticleList = (props: any): JSX.Element => {
  console.log(props);
  return (
    <div className="container-fluid">
      <div className="row fh5co-post-entry">
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_1.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Food &amp; Drink</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">We Eat and Drink All Night</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_2.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Food &amp; Drink</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">Beef Steak at Guatian Restaurant</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <div className="clearfix visible-xs-block"></div>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_3.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">An Overlooking River at the East Cost</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_4.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">A Wildlife In The Mountain of India</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_5.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Photography</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">We Took A Photo</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_6.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">A Modernize Huge and Beautiful Building</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <div className="clearfix visible-xs-block"></div>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_7.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Food &amp; Drinks</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">Enjoying the Native Juice Drink in Brazil</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_8.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">Boat Travel in The Vietnam River</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>



        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_1.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Food &amp; Drink</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">We Eat and Drink All Night</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_2.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Food &amp; Drink</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">Beef Steak at Guatian Restaurant</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <div className="clearfix visible-xs-block"></div>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_3.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">An Overlooking River at the East Cost</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_4.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">A Wildlife In The Mountain of India</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <div className="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_5.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Photography</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">We Took A Photo</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_6.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">A Modernize Huge and Beautiful Building</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <div className="clearfix visible-xs-block"></div>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_7.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Food &amp; Drinks</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">Enjoying the Native Juice Drink in Brazil</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
          <figure>
            <a href="single.html"><img src="images/pic_8.jpg" alt="Image" className="img-responsive" /></a>
          </figure>
          <span className="fh5co-meta"><a href="single.html">Travel</a>, <a href="single.html">Style</a></span>
          <h2 className="fh5co-article-title"><a href="single.html">Boat Travel in The Vietnam River</a></h2>
          <span className="fh5co-meta fh5co-date">March 6th, 2016</span>
        </article>
        <div className="clearfix visible-xs-block"></div>
      </div>
    </div>
  );
}

export default withDatasourceCheck()<any>(ArticleList);
