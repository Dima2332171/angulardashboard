export interface Loan {
  user: string;
  body: number;
  issuance_date: Date;
  actual_return_date: Date|null;
  return_date: Date;
  percent: number;
}
