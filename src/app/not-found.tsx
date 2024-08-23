import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center mt-5 sm:mt-0 sm:justify-center flex-col md:flex-row gap-4 align-start">
      <div className=" max-h-72 max-w-72">
        <Image src="/404.png" width={400} height={400} alt="Picture 404 not found" layout="resposive" />
      </div>
      <div className="flex flex-col gap-2 justify-between items-start px-8">
        <h1 className="text-2xl font-semibold md:text-4xl">404 Not Found</h1>
        <p className="text-sm md:text-xl">Oops! We can&apos;t seem to find the page you are looking for.</p>
        <Link href="/" className="text-sm border-purple-700 rounded-lg bg-purple-900 px-4 py-2 mt-2">
          Return Home
        </Link>
      </div>
    </div>
  );
}
