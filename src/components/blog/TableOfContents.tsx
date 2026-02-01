'use client';
import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll('h2, h3, h4');
    const newHeadings: Heading[] = [];

    headingElements.forEach((heading) => {
      const id = heading.id || `heading-${Math.random().toString(36).substring(7)}`;
      if (!heading.id) {
        heading.id = id;
      }
      newHeadings.push({
        id,
        text: heading.textContent || '',
        level: Number(heading.tagName.substring(1)),
      });
    });

    setHeadings(newHeadings);
  }, [content]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}>
            <a href={`#${heading.id}`} className="text-primary hover:underline">{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
