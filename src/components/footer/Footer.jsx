import { Link, NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer className="sticy-footer ">
      <div className="main-container">
        <div className="w-full">
          <ul className="flex items-center border-b-2 text-sm text-[#70737C] uppercase border-[#359740] border-opacity-30 w-full pt-[31px] pb-[25px]">
            <li>
              <NavLink to={`/`} className='hover:text-[#359740] pr-[32px] border-r-2 border-[#4FA083]'>
                all products
              </NavLink>
            </li>
            <li>
              <NavLink to={`/about`} className='hover:text-[#359740] px-8 border-r-2 border-[#4FA083]'>
                about seedra
              </NavLink>
            </li>
            <li>
              <NavLink to={`/blog`} className='hover:text-[#359740] pl-8'>
                our block
              </NavLink>
            </li>
            <li className="px-[72px]">
              <NavLink to={`/`} className='hover:text-[#359740]'>
                <img src="../assets/svg/logo.svg" alt="logo" />
              </NavLink>
            </li>
            <li className="">
              <NavLink to={`/terms`} className='hover:text-[#359740] pr-8 border-r-2 border-[#4FA083]'>
                Terms&Conditions
              </NavLink>
            </li>
            <li className="pl-8">
              <NavLink to={`/policy`} className='hover:text-[#359740]'>
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex justify-between py-[19px] items-center">
          <div className="flex gap-6 items-center">
            <Link to={`https://www.instagram.com`}>
              <img src="../assets/svg/instagram-logo.svg" alt="instagram" />
            </Link>

            <Link to={`https://www.facebook.com`}>
              <img src="../assets/svg/facebook-logo.svg" alt="facebook" />
            </Link>
          </div>

          <div>
            <p className="text-sm text-[#70737C]">
              All rights reserved
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer