import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api.js';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles.js';
import { Button } from '../../components/Button/index.jsx';
import Logo from '../../assets/logo.svg';

export function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string().required('Nome é Obrigatório'),
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .required('A senha é obrigatória')
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        { validateStatus: () => true },
      );
      if (status === 201 || status === 200) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Cadastro criado com sucesso!');
      } else if (status === 409) {
        toast.error('Email já cadastrado');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Falha no sistema!');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar Conta</Button>
        </Form>
        <p>
          Já possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
