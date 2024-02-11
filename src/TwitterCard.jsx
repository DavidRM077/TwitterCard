import { useState } from "react"
import "./twittercard.css"


// eslint-disable-next-line react/prop-types
function TwitterCard({name,userName,avatar,inicialSeguido})
{
  const [mesigue , setmesigue] = useState(inicialSeguido)
  const text = mesigue ? "Siguiendo" : "Seguir"
  const ButtonClassName = mesigue
  ? "tw-followCard-button is-following"
  : 'tw-followCard-button'


const Cambio = () => 
{
  setmesigue(!mesigue)
}

    return (
        <article className="tw-followCard">
          <header className="tw-followCard-header">
            <img
            className="tw-followCard-avatar"
            src={avatar}
              alt="perfil"
            />
    
            <div className="tw-followCard-info ">
              <strong> {name} </strong>
              <span className="tw-followCard-infoUserName"> @{userName}</span>
            </div>
          </header>
    
          <aside>
            <button className={ButtonClassName} onClick={Cambio}> 
            <span className="tw-followCard-text"> {text} </span>
            <span className="tw-followCard-stopFollow"> Dejar de Seguir </span>
            
            </button>
            
          </aside>
        </article>
      );
}

export default TwitterCard;