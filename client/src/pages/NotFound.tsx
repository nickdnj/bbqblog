import { Link } from 'react-router-dom'
import { Container } from '../components/ui'

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-6xl" aria-hidden>🌊</p>
      <h1 className="mt-4 text-3xl text-navy-dark">Page not found</h1>
      <p className="mt-2 text-muted">That page drifted out with the tide.</p>
      <Link
        to="/"
        className="mt-6 inline-flex px-6 py-3 rounded-full font-semibold bg-seafoam text-navy-dark"
      >
        Back to the guide
      </Link>
    </Container>
  )
}
