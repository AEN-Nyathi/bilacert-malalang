import Image from 'next/image';

interface AboutAuthorProps {
  author: string;
}

export function AboutAuthor({ author }: AboutAuthorProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-8">
      <div className="flex items-center">
        {/* <Image src={author} alt={author} width={80} height={80} className="rounded-full" /> */}
        <div className="ml-4">
          <h3 className="text-xl font-bold">About {author}</h3>
          <p className="text-gray-600">best writer since 2002</p>
        </div>
      </div>
    </div>
  );
}
