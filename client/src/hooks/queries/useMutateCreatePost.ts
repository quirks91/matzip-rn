import { createPost } from '@/api';
import queryClient from '@/api/queryClient';
import { queryKeys } from '@/constants';
import {UseMutationCustomOptions} from '@/types/common';
import {useMutation} from '@tanstack/react-query';

export default function useMutateCreatePost(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS]})
    },
    ...mutationOptions,
  });
}
