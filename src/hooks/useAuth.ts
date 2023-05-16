import { useAppSelector } from '@/store/store';

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.user);
  return {
    isAuth: !!id,
    id,
    email,
    token,
  };
};
