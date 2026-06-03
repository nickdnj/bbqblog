import { useEffect, useState } from 'react'

type BeforeInstallPromptEvent = Event & {
  prompt: () => void
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const DISMISS_KEY = 'picnic_install_dismissed'

function isIos() {
  return typeof navigator !== 'undefined' && /iphone|ipad|ipod/i.test(navigator.userAgent)
}
function isStandalone() {
  return (
    window.matchMedia?.('(display-mode: standalone)').matches ||
    (navigator as unknown as { standalone?: boolean }).standalone === true
  )
}

// Walks users through adding the PWA to their home screen. iOS has no one-tap
// install, so we show the Share → Add to Home Screen steps; Chrome/Android gets
// a real "Install" button via the captured beforeinstallprompt event.
export default function InstallGuide() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (isStandalone()) return // already installed — nothing to show
    if (localStorage.getItem(DISMISS_KEY) === '1') return
    setHidden(false)
    const onPrompt = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    const onInstalled = () => setHidden(true)
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (hidden) return null

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, '1')
    setHidden(true)
  }

  return (
    <div className="max-w-3xl mx-auto mb-10 bg-white border border-navy/10 border-l-4 border-l-seafoam rounded-2xl p-5 shadow-[var(--shadow-soft)] flex gap-4 items-start">
      <span className="text-3xl leading-none" aria-hidden>📲</span>
      <div className="flex-1">
        <h3 className="text-navy-dark font-display text-lg">Add this guide to your phone</h3>

        {deferred ? (
          <>
            <p className="text-slate text-sm mt-1">One-tap access from your home screen — works offline, no app store.</p>
            <button
              onClick={async () => {
                deferred.prompt()
                await deferred.userChoice
                dismiss()
              }}
              className="mt-3 inline-flex px-5 py-2.5 rounded-full font-semibold bg-seafoam text-navy-dark"
            >
              Install app
            </button>
          </>
        ) : isIos() ? (
          <>
            <p className="text-slate text-sm mt-1">Two taps in Safari and it lives on your home screen — works offline:</p>
            <ol className="text-slate text-sm mt-2 space-y-1 list-decimal pl-5 marker:text-seafoam marker:font-bold">
              <li>Tap the <strong>Share</strong> button (the square with an up-arrow ⬆︎) in Safari’s toolbar.</li>
              <li>Scroll down and tap <strong>“Add to Home Screen.”</strong></li>
              <li>Tap <strong>Add</strong> — done. Open it like any app.</li>
            </ol>
          </>
        ) : (
          <p className="text-slate text-sm mt-1">
            Open your browser menu and choose <strong>“Add to Home Screen”</strong> (or <strong>“Install”</strong>) for
            one-tap access — even offline.
          </p>
        )}
      </div>

      <button onClick={dismiss} aria-label="Dismiss" className="text-muted hover:text-navy text-2xl leading-none -mt-1">
        ×
      </button>
    </div>
  )
}
