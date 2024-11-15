import { Post } from "../../domain/models/post";
import { PostRepository } from "../../domain/repositories/postRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PrismaPostRepository implements PostRepository {
  async getList(sort: string[], range: number[], filter: { [key: string]: any }): Promise<{ posts: Post[]; total: number }> {
    const orderBy: { [key: string]: "asc" | "desc" }[] = [];
    for (let i = 0; i < sort.length; i += 2) {
      const field = sort[i];
      const direction = sort[i + 1]?.toLowerCase();
      if (field && (direction === "asc" || direction === "desc")) {
        orderBy.push({ [field]: direction });
      } else {
        throw new Error(`Invalid sort parameter: ${field} - ${direction}`);
      }
    }

    const posts = await prisma.post.findMany({
      where: filter,
      orderBy: orderBy,
      skip: range[0],
      take: range[1] - range[0] + 1,
    });

    const total = await prisma.post.count({ where: filter });
    return { posts: posts.map((post) => new Post(post.id, post.title, post.content, post.createdAt)), total };
  }

  async getOne(id: number): Promise<Post> {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) throw new Error("Post not found");
    return new Post(post.id, post.title, post.content, post.createdAt);
  }

  async getMany(filter: { [key: string]: any }): Promise<Post[]> {
    const posts = await prisma.post.findMany({ where: filter });
    return posts.map((post) => new Post(post.id, post.title, post.content, post.createdAt));
  }

  async getManyReference(filter: { [key: string]: any }): Promise<Post[]> {
    const posts = await prisma.post.findMany({ where: filter });
    return posts.map((post) => new Post(post.id, post.title, post.content, post.createdAt));
  }

  async create(post: Post): Promise<Post> {
    const createdPost = await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
      },
    });
    return new Post(createdPost.id, createdPost.title, createdPost.content, createdPost.createdAt);
  }

  async update(id: number, post: Post): Promise<Post> {
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title: post.title,
        content: post.content,
      },
    });
    return new Post(updatedPost.id, updatedPost.title, updatedPost.content, updatedPost.createdAt);
  }

  async delete(id: number): Promise<void> {
    await prisma.post.delete({ where: { id } });
  }
}
