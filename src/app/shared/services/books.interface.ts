export enum BookStatus {
    NotStarted = "Not Started",
    CurrentlyReading = "Currently Reading",
    Completed = "Completed"
}

export interface Book {
    id?: number;
    title: string;
    description: string;
    notes: string;
    status: BookStatus;
    rating?: number;
}

export interface Stat {
    title: string;
    subtitle: string;
    icon: string;
}