import { ImageUri, Post } from "@/types/domain";
import axiosInstance from "./axios"

export type ResponsePost = Post & {images: ImageUri[]};
export type RequestCreatePost = Omit<Post, 'id'> & {imageUris: ImageUri[]};

export const createPost = async(body: RequestCreatePost): Promise<ResponsePost> => {
  const { data } = await axiosInstance.post('/posts', body);

  return data;
}