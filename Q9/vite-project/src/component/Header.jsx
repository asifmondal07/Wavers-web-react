
import {useNavigate,Link} from 'react-router-dom'
function Header() {

    const navigate=useNavigate()

    const navIteam=[
        {name:"Home", path:"/",},
        {name:"Aboout", path:"/about"},
        {name:"Contact", path:"/contact"}
    ]

    const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border:"1px solid black",
    padding: "50px 28px",
    fontFamily: "system-ui, sans-serif",
    
  };

  const linksStyle = {
    display: "flex",
    gap: "24px",
  };



  
  return (
    <header >
        <div>
        <h1>Welcome Header</h1>
            <nav style={navbarStyle}>
                <div style={linksStyle}>
                {
                    navIteam
                        .map((itm)=>(
                            <Link
                            key={itm.name}
                            to={itm.path}
                            onClick={(()=>{
                                navigate(itm.path)
                            })}
                
                            
                            >
                            {itm.name}
                            </Link>
                        ))
                }
                </div>
            </nav>
            
            </div>

    </header>
    
  )
}

export default Header
