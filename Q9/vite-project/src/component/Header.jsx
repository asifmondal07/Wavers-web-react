
import {useNavigate, NavLink} from 'react-router-dom'


function Header() {

    const navigate=useNavigate()

    const navItems=[
        {name:"Home", path:"/",},
        {name:"Aboout", path:"/about"},
        {name:"Contact", path:"/contact"}
    ]




  
  return (
     <header className="bg-purple-200 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
      
          <h1 className="text-xl font-bold text-blue-600">Welcome Header</h1>

         
          <nav>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => navigate(item.path)}
                    className="text-black-600 rounded-3xl bg-blue-200 px-4 py-2
                     hover:text-amber-50 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
    
  )
}

export default Header
