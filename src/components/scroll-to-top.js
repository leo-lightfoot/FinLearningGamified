import { Component } from "react";
import gsap from "gsap";
import { TweenLite } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * ScrollToTop component
 * 
 * This component scrolls the window to the top when mounted or when the scrollKey prop changes.
 * It's used in the Page component to ensure that each new page starts at the top of the window.
 */
class ScrollToTop extends Component {
  tween = null;

  componentDidMount() {
    this.scrollToTop();
  }

  componentDidUpdate(prevProps) {
    // If the scrollKey prop changes, scroll to the top
    if (prevProps.scrollKey !== this.props.scrollKey) {
      this.scrollToTop();
    }
  }

  scrollToTop() {
    this.tween = TweenLite.to(window, 0.5, { scrollTo: 0 });
  }

  componentWillUnmount() {
    // Clean up the tween when the component unmounts
    if (this.tween) this.tween.kill();
  }

  render() {
    return null;
  }
}

export default ScrollToTop;