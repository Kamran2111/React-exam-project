export interface IBudgetInfo {
  id: number | null;
  SN: string | null;
  BudgetNo: string | null;
  BudgetDescription: string | null;
  BudgetedAmount: string | null;
  ActualAmount: string | null;
  Variance: string | null;
  Date: string | null;
  isLoading: boolean;
  error: string | null;
}
export interface BudgetQueryParams {
  SN: string;
  BudgetNo: string;
  BudgetDescription?: string;
  BudgetedAmount: string;
  ActualAmount: string;
  Variance: string;
  Date: string;
}
