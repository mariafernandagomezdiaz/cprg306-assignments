import Link from "next/link";

export default function Week2() {
  const linkStyles = "hover:underline hover:text-green-300";
    return (
        <main>
            <h1 className="text-xl">CPRG 306: Web Development 2 - Assignments</h1>
            <li><Link className={linkStyles} href="/week-2"> Week 2</Link></li>
            <li><Link className={linkStyles} href="/week-3"> Week 3</Link></li>
            <li><Link className={linkStyles} href="/week-4"> Week 4</Link></li>
            <li><Link className={linkStyles} href="/week-5"> Week 5</Link></li>
            <li><Link className={linkStyles} href="/week-6"> Week 6</Link></li>
            <li><Link className={linkStyles} href="/week-7"> Week 7</Link></li>
            <li><Link className={linkStyles} href="/week-8"> Week 8</Link></li>
        </main>
    );
}
