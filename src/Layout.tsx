/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  getPublicUrl,
  LayoutServiceData,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Scripts from 'src/Scripts';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  //const isPageEditing = layoutData.sitecore.context.pageEditing;
  //const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic|Roboto:400,300,700' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/icomoon.css" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/style.css" />
        <script src="js/modernizr-2.6.2.min.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/main.js"></script>

      </Head>
      <div id="fh5co-offcanvas">
        <a href="#" className="fh5co-close-offcanvas js-fh5co-close-offcanvas"><span><i className="icon-cross3"></i> <span>Close</span></span></a>
        <div className="fh5co-bio">
          <figure>
            <img src="images/person1.jpg" alt="Free HTML5 Bootstrap Template" className="img-responsive" />
          </figure>
          <h3 className="heading">About Me</h3>
          <h2>Emily Tran Le</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
          <ul className="fh5co-social">
            <li><a href="#"><i className="icon-twitter"></i></a></li>
            <li><a href="#"><i className="icon-facebook"></i></a></li>
            <li><a href="#"><i className="icon-instagram"></i></a></li>
          </ul>
        </div>

        <div className="fh5co-menu">
          <div className="fh5co-box">
            <h3 className="heading">Categories</h3>
            <ul>
              <li><a href="#">Travel</a></li>
              <li><a href="#">Style</a></li>
              <li><a href="#">Photography</a></li>
              <li><a href="#">Food &amp; Drinks</a></li>
              <li><a href="#">Culture</a></li>
            </ul>
          </div>
          <div className="fh5co-box">
            <h3 className="heading">Search</h3>
            <form action="#">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Type a keyword" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* root placeholder for the app, which we add components to using route data */}
      <>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer id="fh5co-footer">
          <>{route && <Placeholder name="headless-footer" rendering={route} />}</>
        </footer>
      </>
    </>
  );
};

export default Layout;
