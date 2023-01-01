import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <Image src='/logo.png' width={140} height={80} />
          {/* <h4>ThePeopleList</h4> */}
        </div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/people'>People Listing</Link>
      </nav>
  );
  }
   
  export default Navbar;