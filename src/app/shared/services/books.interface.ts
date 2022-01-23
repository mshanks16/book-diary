export enum BookStatus {
    NotStarted = "Not Started",
    CurrentlyReading = "Currently Reading",
    Completed = "Completed"
}

export interface Book {
    id?: number;
    title: string;
    imagePath: string;
    description: string;
    author: string;
    notes: string;
    status: BookStatus;
    rating?: number;
    pages: number;
    currentPage: number;
    dateCompleted?: Date;
}

export interface Stat {
    title: string;
    subtitle: string;
    icon: string;
}