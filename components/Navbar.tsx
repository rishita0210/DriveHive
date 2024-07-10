
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <nav className="fixed w-full z-50 bg-customBlue shadow-md py-4">
//       <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between px-6 md:px-14">
//         <div className="flex items-center gap-4">
//         <Image src="/logo.png" alt="" 
//                 width={118} height={118}
//                 className='object-contain'/>
//         </div>
//         <div className="flex-grow flex items-center justify-center space-x-4">
//           <Link href="/" legacyBehavior>
//             <a className="text-black font-bold hover:buttonorange text-center">Home</a>
//           </Link>
//           <Link href="/shop" legacyBehavior>
//             <a className="text-black font-bold hover:text-blue-400">Shop</a>
//           </Link>
//           <Link href="/categories" legacyBehavior>
//             <a className="text-black font-bold hover:text-blue-400">Categories</a>
//           </Link>
//           <Link href="/contact" legacyBehavior>
//             <a className="text-black font-bold hover:text-blue-400">Contact Us</a>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link href="/wishlist" legacyBehavior>
//             <a className="flex items-center space-x-1 hover:text-blue-400">
//               <FontAwesomeIcon icon={faHeart} className="h-4 w-4" />
//               <span className="text-sm">Wishlist</span>
//             </a>
//           </Link>
//           <Link href="/cart" legacyBehavior>
//             <a className="flex items-center space-x-1 hover:text-blue-400">
//               <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4" />
//               <span className="text-sm">Cart</span>
//             </a>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black shadow-md py-4 shadow-gray-500">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between px-6 md:px-14">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="" 
                width={118} height={218}
                className='object-contain'/>
        </div>
        <div className="flex-grow flex items-center justify-center space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-white font-bold hover:text-orange-400 text-center">Home</a>
          </Link>
          <Link href="/shop" legacyBehavior>
            <a className="text-white font-bold hover:text-blue-400">Shop</a>
          </Link>
          <Link href="/categories" legacyBehavior>
            <a className="text-white font-bold hover:text-blue-400">Categories</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-white font-bold hover:text-blue-400">Contact Us</a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/wishlist" legacyBehavior>
            <a className="flex items-center space-x-1 hover:text-blue-400">
              <FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-white" />
              <span className="text-sm text-white">Wishlist</span>
            </a>
          </Link>
          <Link href="/cart" legacyBehavior>
            <a className="flex items-center space-x-1 hover:text-blue-400">
              <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4 text-white" />
              <span className="text-sm text-white">Cart</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




