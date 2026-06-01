import { useState } from 'react'
import { Section, SectionHeading } from '../components/ui'
import { HOA_PHONE } from '../data/content'

const field = 'flex flex-col gap-2 font-semibold text-slate'
const input =
  'px-4 py-3 rounded-xl border border-navy/20 bg-foam focus:outline-none focus:border-seafoam focus:ring-2 focus:ring-seafoam/40'

export default function Reserve() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Section id="reserve">
      <SectionHeading
        eyebrow="Plan Your Gathering"
        title="Reserve a grill & acknowledge the rules"
        subtitle="Submit the form below to request a grill slot. The HOA team will confirm availability within one business day."
      />

      <form
        className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] border border-navy/8"
        onSubmit={(e) => {
          e.preventDefault()
          if (!(e.currentTarget as HTMLFormElement).reportValidity()) return
          setSubmitted(true)
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={field}>
            <span>Name</span>
            <input className={input} type="text" name="name" required />
          </label>
          <label className={field}>
            <span>Unit #</span>
            <input className={input} type="text" name="unit" required />
          </label>
          <label className={field}>
            <span>Email</span>
            <input className={input} type="email" name="email" required />
          </label>
          <label className={field}>
            <span>Phone</span>
            <input className={input} type="tel" name="phone" required />
          </label>
          <label className={field}>
            <span>Preferred date</span>
            <input className={input} type="date" name="date" required />
          </label>
          <label className={field}>
            <span>Estimated guest count</span>
            <input className={input} type="number" name="guests" min={1} max={150} required />
          </label>
        </div>
        <label className="flex items-start gap-3 mt-6 text-muted">
          <input type="checkbox" name="rules" required className="mt-1.5" />
          <span>I have read and agree to follow the Wharfside picnic &amp; grill rules.</span>
        </label>
        <button
          type="submit"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-seafoam text-navy-dark shadow-[0_12px_25px_rgba(123,218,196,0.25)] transition-transform hover:-translate-y-0.5"
        >
          Submit reservation request
        </button>

        {submitted && (
          <p
            role="status"
            className="mt-6 p-4 bg-seafoam/15 border-l-4 border-seafoam rounded-lg text-navy-dark font-medium"
          >
            Thanks! Online reservations aren't wired up yet — to lock in your grill, call the HOA office at {HOA_PHONE}{' '}
            with your date, time, and guest count.
          </p>
        )}
      </form>
    </Section>
  )
}
