import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default function reverseSentence(sentence) {
    const reversedSentence = sentence.split(' ').reverse().join(' ');
    return reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
}

const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
];

const names = data.map(item => item.name);
console.log(names);

const nestedData = [
    [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
    ],
    [
        { id: 4, name: 'Alice' },
        { id: 5, name: 'Eve' },
        { id: 6, name: 'Charlie' },
    ],
];

const nestedNames = nestedData.flatMap(array => array.map(item => item.name));
console.log(nestedNames);
