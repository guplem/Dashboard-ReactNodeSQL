import { Post } from "../../domain/models/post";
import { PostRepository } from "../../domain/repositories/postRepository";

export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  create(postData: { [key: string]: any }): Promise<Post> {
    return this.postRepository.create(postData as Post);
  }

  getList(sort: string[], range: number[], filter: { [key: string]: any }): Promise<{ posts: Post[]; total: number }> {
    return this.postRepository.getList(sort, range, filter);
  }

  getOne(id: number | string): Promise<Post> {
    const idNumber = typeof id === "string" ? parseInt(id, 10) : id;
    return this.postRepository.getOne(idNumber);
  }

  getMany(filter: { [key: string]: any }): Promise<Post[]> {
    return this.postRepository.getMany(filter);
  }

  getManyReference(filter: { [key: string]: any }): Promise<Post[]> {
    return this.postRepository.getManyReference(filter);
  }

  update(id: number | string, post: Post): Promise<Post> {
    const idNumber = typeof id === "string" ? parseInt(id, 10) : id;
    return this.postRepository.update(idNumber, post);
  }

  delete(id: number | string): Promise<void> {
    const idNumber = typeof id === "string" ? parseInt(id, 10) : id;
    return this.postRepository.delete(idNumber);
  }
}
