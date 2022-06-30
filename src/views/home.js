import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderContainer from '../components/header-container'
import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import LinkIconButton from '../components/link-icon-button'
import StoreBanner from '../components/store-banner'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          TenEighty Agency - Markham-based Online Virtual Marketing Agency
        </title>
        <meta
          name="description"
          content="TenEighty Agency delivers creativity and strategy within full-service marketing campaigns and services."
        />
        <meta
          property="og:title"
          content="TenEighty Agency - Markham-based Online Virtual Marketing Agency"
        />
        <meta
          property="og:description"
          content="TenEighty Agency delivers creativity and strategy within full-service marketing campaigns and services."
        />
      </Helmet>
      <HeaderContainer></HeaderContainer>
      <div className="home-main">
        <div className="home-hero">
          <video
            src="/playground_assets/teneighty%20website%20banner.mp4"
            loop
            muted
            poster="/playground_assets/teneighty%20website%20banner.mp4"
            autoPlay
            className="home-video headline1"
          ></video>
          <div className="home-container01">
            <span className="home-text">
              <span className="home-text01"></span>
              <span className="home-text02"></span>
              <span className="home-text03"></span>
              <span className="home-text04"></span>
              <span className="home-text05">
                Full service creativity
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="home-text07">and strategy</span>
            </span>
            <PrimaryButton
              button="Get Started"
              rootClassName="primary-button-root-class-name"
            ></PrimaryButton>
          </div>
        </div>
      </div>
      <div className="home-features">
        <h2 className="headline2 home-text08">Tailor-made solutions</h2>
        <span className="home-text09">
          <span className="home-text10">
            Whether your project is big or small, we can provide help where ever
            you need, with the flexibility to add more services later.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className="home-features1">
          <FeatureCard
            text="We can be an extension of your marketing department - this is the most integrated marketing solution you can get! "
            title="360 Marketing"
          ></FeatureCard>
          <FeatureCard
            text="Marketing is a broad term that includes content creation, copywriting, social media management, and more. "
            title="Pick a field"
            image_src="/playground_assets/02.svg"
          ></FeatureCard>
          <FeatureCard
            text="Not sure where to start? We can help you decide what type of marketing you should focus on first. "
            title="Start small"
            image_src="/playground_assets/03.svg"
          ></FeatureCard>
          <FeatureCard
            text="The maturity of your business just means that a different marketing strategy is needed. All businesses can use marketing to grow and retain existing customers."
            title="For businesses of any size"
            image_src="/playground_assets/04.svg"
          ></FeatureCard>
          <FeatureCard
            text="TenEighty keeps up with trends in the world of all things digital, just so we can deliver the right messages to the corresponding audience. "
            title="Connect with your audience"
            image_src="/playground_assets/05.svg"
          ></FeatureCard>
          <FeatureCard
            text="We have experience with writing professional press releases and highly niche topics. "
            title="Professional results"
            image_src="/playground_assets/06.svg"
          ></FeatureCard>
        </div>
      </div>
      <div className="home-clients">
        <div className="home-divider"></div>
        <img
          alt="image"
          src="/playground_assets/logo-1-4.7d881935-1200w.png"
          className="home-image"
        />
        <img
          alt="image"
          src="/playground_assets/20220126-184036_180x-1200w.webp"
          className="home-image01"
        />
        <img
          alt="image"
          src="/playground_assets/naturolly_transparent_green_horizontal_360x-1200w.webp"
          className="home-image02"
        />
        <img
          alt="image"
          src="/playground_assets/wechat-image_20191117114754-scaled-e1574010556712-1200w.png"
          className="home-image03"
        />
        <img
          alt="image"
          src="/playground_assets/wechat%20image_20220202161548-1200w.png"
          className="home-image04"
        />
        <div className="home-divider1"></div>
      </div>
      <div className="home-testimonials">
        <div className="home-container02">
          <div className="home-container03">
            <img
              alt="image"
              src="/playground_assets/quote-mark.svg"
              className="home-image05"
            />
            <h1 className="home-text11 headline2">
              Real Stories from Real Customers
            </h1>
            <span>Get inspired by these stories.</span>
            <div className="home-container04">
              <TestimonialsCard image_src="/playground_assets/logo-4.svg"></TestimonialsCard>
            </div>
          </div>
          <div className="home-container05">
            <div className="home-container06">
              <TestimonialsCard
                src="/playground_assets/logo-1.svg"
                text="I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
                text1="Jane Cooper"
                text2="CEO, Airbnb"
                image_src="/playground_assets/logo-1.svg"
              ></TestimonialsCard>
            </div>
            <div className="home-container07">
              <TestimonialsCard
                text="Landify saved our time in designing my company page."
                text1="Kristin Watson"
                text2="Co-Founder, FedEx"
                image_src="/playground_assets/logo-2.svg"
              ></TestimonialsCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-feature1">
        <div className="home-container08">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="home-image06"
          />
        </div>
        <div className="home-container09">
          <h3 className="headline3">Headline</h3>
          <span className="home-text14 lead1">
            <span className="home-text15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
          <LinkIconButton text="Get Started"></LinkIconButton>
        </div>
      </div>
      <div className="home-feature2">
        <div className="home-container10">
          <h2 className="headline2 home-text16">
            <span className="home-text17">
              Enter the world of all fashion trends
            </span>
          </h2>
          <span className="home-text18 lead1">
            <span className="home-text19">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1200"
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="home-image07"
        />
      </div>
      <div className="home-c-t-a">
        <div className="home-container11">
          <div className="home-container12">
            <h2 className="headline2 home-text20">
              <span className="home-text21">
                Manage your projects from your mobile
              </span>
            </h2>
            <span className="home-text22 lead1">
              <span className="home-text23">
                Download the app to manage your projects, keep track of the
                progress and complete tasks without procastinating. Stay on
                track and complete on time!
              </span>
            </span>
            <span className="home-text24 subtitle2">
              <span className="home-text25">Get the App</span>
            </span>
            <StoreBanner></StoreBanner>
          </div>
          <div className="home-container13">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image08"
            />
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image09"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
