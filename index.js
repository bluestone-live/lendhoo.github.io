function fn() {
  if (window.tns) {
    window.tns({
      container: ".slider",
      items: 1,
      mode: "gallery",
      autoPlay: true,
      autoplayTimeout: 3500,
      swipeAngle: false,
      controls: false,
      speed: 500,
      nav: true,
      navContainer: ".nav",
      animateIn: "fade-in",
      animateOut: "fade-out"
    });
  }
}
if (document.readyState != "loading") {
  fn();
} else {
  document.addEventListener("DOMContentLoaded", fn);
}
