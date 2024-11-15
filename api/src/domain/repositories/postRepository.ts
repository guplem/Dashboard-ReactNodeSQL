import { Post } from "../models/post";

export interface PostRepository {
  /**
   * Retrieves a list of posts with sorting, range, and filter options.
   * @param sort - Array of sorting options, e.g., ["title","ASC"].
   * @param range - Array defining the range of items, e.g., [0, 24].
   * @param filter - Object containing filter criteria, e.g., {"title":"bar"}.
   * @returns A promise that resolves to an object containing the posts and the total count.
   */
  getList(sort: string[], range: number[], filter: { [key: string]: any }): Promise<{ posts: Post[]; total: number }>;

  /**
   * Retrieves a single post by its ID.
   * @param id - The ID of the post, e.g., 123
   * @returns A promise that resolves to the post.
   */
  getOne(id: number): Promise<Post>;

  /**
   * Retrieves multiple posts based on filter criteria.
   * @param filter - Object containing filter criteria, e.g., {"ids":[123,456,789]}.
   * @returns A promise that resolves to an array of posts.
   */
  getMany(filter: { [key: string]: any }): Promise<Post[]>;

  /**
   * Retrieves multiple posts based on reference filter criteria.
   * @param filter - Object containing reference filter criteria, e.g., {"author_id":345}.
   * @returns A promise that resolves to an array of posts.
   */
  getManyReference(filter: { [key: string]: any }): Promise<Post[]>;

  /**
   * Creates a new post.
   * @param post - The post data to create.
   * @returns A promise that resolves to the created post.
   */
  create(post: Post): Promise<Post>;

  /**
   * Updates a post by its ID.
   * @param id - The ID of the post, e.g., 123
   * @param post - The post data to update.
   * @returns A promise that resolves to the updated post.
   */
  update(id: number, post: Post): Promise<Post>;

  /**
   * Deletes a post by its ID.
   * @param id - The ID of the post, e.g., 123
   * @returns A promise that resolves when the post is deleted.
   */
  delete(id: number): Promise<void>;
}
