export interface RatingProps {
    id: string;
    max: number;
    name: string;
    onClick: (newValue: number, recipeId: string) => void
    size: 'small' | 'medium' | 'large';
    value: number;
}
