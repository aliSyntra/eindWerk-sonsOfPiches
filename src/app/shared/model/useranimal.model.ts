export class Useranimal {
    constructor (
        public id: number,
        public animal_id: number,
        public name: string,
        public gender: string,
        public birthday: Date = new Date(),
        public weight: number,
        public size: number,
        public breed_id: number,
        public user_id: number,
        public chip: number,
        public insurance: number,
        public updated_at: Date = new Date(),
        public created_at: Date = new Date()
    ) {}
}