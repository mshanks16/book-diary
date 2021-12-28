export enum BookStatus {
    NotStarted = "Not Started",
    CurrentlyReading = "Currently Reading",
    Completed = "Completed"
}

export interface Book {
    id: number;
    title: string;
    description: string;
    status: BookStatus;
}