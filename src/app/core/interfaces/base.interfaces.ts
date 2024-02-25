export interface ResourceBase {
  id: number;
  name: string;
  url: string; // No necesario en GraphQL
  created: string;
}

export interface ResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
