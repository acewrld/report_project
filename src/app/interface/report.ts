export interface ReportInterface {
    id: number;
    name: string;
    category: string;
    user: string;
    date: string;
    status: 'success' | 'failed' | 'pending';
    slug: string;
}
