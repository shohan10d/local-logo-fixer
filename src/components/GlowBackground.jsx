// Static, GPU-cheap background. Previously used large animated blur circles
// which caused constant repaints and made the page feel sluggish.
const GlowBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-mesh-gradient">
      <div className="absolute inset-0 bg-grid opacity-[0.18]" />
    </div>
  );
};

export default GlowBackground;
