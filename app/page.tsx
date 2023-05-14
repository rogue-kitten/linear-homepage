import Container from './components/container';

export default function Home() {
  return (
    <div>
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Container>linear home page</Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
