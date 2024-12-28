import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';
import { api } from '../../services/api.js';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';
import { Button } from '../../components/Button';
import Logo from '../../assets/logo.svg';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate('/admin/pedidos');
              } else {
                navigate('/');
              }
            }, 1000);
            return 'Seja bem vindo(a) 👌';
          },
        },
        error: 'Email ou Senha inválidos 🤯',
      },
    );
    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá Seja bem vindo ao{' '}
          <span>
            Dev Burger! <br />
          </span>
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
