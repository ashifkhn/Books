export interface Book {
  key: string;
  cover_id: string;
  title: string;
  first_publish_year: number;
  authors: {name: string}[];
  subject: string[];
}
