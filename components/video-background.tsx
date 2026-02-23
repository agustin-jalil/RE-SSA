import Image from "next/image"

export function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {/* Background image */}
      <Image
        src="/images/hero-bg-main.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle radial vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Top soft gradient */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
        }}
      />

      {/* Bottom soft gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
        }}
      />

      {/* Video placeholder - uncomment and add video src to enable */}
      {/* 
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      >
        <source src="" type="video/mp4" />
      </video>
      */}
    </div>
  )
}
