import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/post');
  return (
    <>
    <div>
      hello
    </div>
    
    </>
  );
}

