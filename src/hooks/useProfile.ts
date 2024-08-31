import { userApi } from '../redux/services/user.ts';

function useProfile() {
    const { data, isLoading } = userApi.useGetProfileQuery();

    return {
        data,
        isLoading
    };
}

export { useProfile };
