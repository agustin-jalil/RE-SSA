import { ProfileHeader } from "@/components/profile-header"
import { LinkButtons } from "@/components/link-buttons"
import { VideoBackground } from "@/components/video-background"

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-start justify-center px-4 pb-10 pt-8 sm:items-center sm:py-10">
      <VideoBackground />

      <div className="relative z-10 flex w-full max-w-[420px] flex-col items-center gap-5">
        <ProfileHeader />
        <LinkButtons />
        <footer className="mt-2 text-center text-[11px] tracking-wider text-white/30">
          <p>{"2026 | Todos los derechos reservados"}</p>
        </footer>
      </div>
    </main>
  )
}
