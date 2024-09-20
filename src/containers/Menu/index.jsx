import { Container, Banner, CategoryMenu, ProductsContainer } from './styles';

export function Menu() {
  return (
    <main>
      <Container>
        <Banner>
          <h1>
            O MELHOR <br />
            HANBURGER <br />
            ESTA AQUI!
            <span>Esse cardápio está irresistível!</span>
          </h1>
        </Banner>
        <CategoryMenu>
          <h1>Seja Bem Vindo!</h1>
        </CategoryMenu>
        <ProductsContainer></ProductsContainer>
      </Container>
    </main>
  );
}
