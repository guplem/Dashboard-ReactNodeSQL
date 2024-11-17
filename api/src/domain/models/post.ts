export class Post extends Model<Post> {
  constructor(public id: number, public title: string, public content: string | null, public createdAt: Date) {
    super();
  }

  static fromMap(map: { [key: string]: any }): Post {
    return new Post(map.id, map.title, map.content, map.createdAt);
  }
}
