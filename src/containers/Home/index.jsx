import { CategoriesCarousel, OffersCarousel } from '../../components';

import { Banner, Container } from './styles';

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Seja Bem Vindo!</h1>
      </Banner>
      <Container>
        <div>
          <CategoriesCarousel />
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
}
