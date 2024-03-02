function sortPeople(names: string[], heights: number[]): string[] {
    const people = names.map((name, i) => ({ name, height: heights[i] }));
    people.sort((a, b) => a.height - b.height);
    return people.map(person => person.name);
    
};