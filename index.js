// Example data array
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

// Extract names from the data array
const names = data.flat().map(person => person.name);
// names: ['John', 'Jane', 'Bob']