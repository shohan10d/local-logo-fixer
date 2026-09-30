// Animation removed for performance: this is now a plain wrapper that renders
// its children immediately (no IntersectionObserver, no transitions).
// `delay` / `animation` props are accepted and ignored for compatibility.
const FadeInUp = ({ children, className = "", delay = "", animation = "" }) => {
  void delay;
  void animation;
  return <div className={className}>{children}</div>;
};

export default FadeInUp;
