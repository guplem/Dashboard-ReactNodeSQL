import { Post } from "../../domain/models/post";
import { PostRepository } from "../../domain/repositories/postRepository";

export class PrismaPostRepository implements PostRepository {
  create(post: Post): Promise<Post> {
    throw new Error("Method not implemented.");
  }

  getList(sort: string[], range: number[], filter: { [key: string]: any }): Promise<{ posts: Post[]; total: number }> {
    throw new Error("Method not implemented.");
  }

  getOne(id: number): Promise<Post> {
    throw new Error("Method not implemented.");
  }

  getMany(filter: { [key: string]: any }): Promise<Post[]> {
    throw new Error("Method not implemented.");
  }

  getManyReference(filter: { [key: string]: any }): Promise<Post[]> {
    throw new Error("Method not implemented.");
  }

  update(id: number, post: Post): Promise<Post> {
    throw new Error("Method not implemented.");
  }

  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  //   async findAll(): Promise<Post[]> {
  //     const posts = await prisma.post.findMany();
  //     return posts.map(post => new Post(post.id, post.title, post.content, post.createdAt));
  //   }

  //   async create(post: Post): Promise<Post> {
  //     const createdPost = await prisma.post.create({
  //       data: {
  //         title: post.title,
  //         content: post.content,
  //       },
  //     });
  //     return new Post(createdPost.id, createdPost.title, createdPost.content, createdPost.createdAt);
  //   }
}
