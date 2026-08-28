const styles = {
  main: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    background: '#fafafa',
    color: '#111',
  },
  inner: { textAlign: 'center', padding: '2rem' },
  h1: { fontSize: '2.5rem', marginBottom: '0.5rem' },
  p: { color: '#555' },
  badge: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.4rem 0.9rem',
    borderRadius: 999,
    border: '1px solid #ddd',
    fontSize: '0.85rem',
  },
}

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.inner}>
        <h1 style={styles.h1}>Hello, Next.js on Vercel 👋</h1>
        <p style={styles.p}>Built with GitHub Actions on a Blacksmith runner — with warm caches. 🔥</p>
        <p style={styles.p}>Build time: {new Date().toISOString()}</p>
        <span style={styles.badge}>annagzh-personal-org → annagzh team</span>
      </div>
    </main>
  )
}
