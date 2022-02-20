export interface Post {
  id: number;
  attributes: {
    user: string;
    announcement: string;
    createdAt?: Date;
  }
}

interface PaginationInfo {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
}

export interface PostResponse {
  data: Post;
  meta?: PaginationInfo
}

export interface PostListResponse {
  data: Post[];
  meta?: PaginationInfo
}
