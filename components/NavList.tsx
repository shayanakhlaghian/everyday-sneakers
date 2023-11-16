import Link from 'next/link';

import { brands, navLinks } from '@/constants';
import { Cursor } from '.';

const NavList = () => {
  return (
    <ul className='menu lg:menu-horizontal font-bold'>
      <li className='menu__item'>
        <details>
          <summary>{navLinks[0].title}</summary>
          <ul>
            {brands.map(({ id, href, title }) => (
              <li key={id}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      {navLinks.slice(1, 4).map(({ id, href, title }) => (
        <li key={id} className='menu__item'>
          <Link href={href}>{title}</Link>
        </li>
      ))}
      <Cursor />
    </ul>
  );
};
export default NavList;
