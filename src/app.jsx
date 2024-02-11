import TwitterCard from "./TwitterCard";
import "./index.css";

function App() {
  const imgURL1 =
    "https://pbs.twimg.com/profile_images/1640450070305710080/UZAOn6Mx_400x400.jpg";
  const imgURL2 =
    "https://pbs.twimg.com/profile_images/1266466408818339840/enKa2TfW_400x400.jpg";
  const imgURL3 =
    "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg";
  const imgURL4 =
    "https://pbs.twimg.com/profile_images/1580588652131979264/-MA9umRV_400x400.jpg";

  const users = [
    {
      name: "Kpinini",
      userName: "Kpinini",
      mesigue: true,
      avatar: imgURL1,
    },
    {
      name: "Sofia Vergara",
      userName: "SofiaVergara",
      mesigue: false,
      avatar: imgURL2,
    },
    {
      name: "Elon Musk",
      userName: "ElonMuskX",
      mesigue: false,
      avatar: imgURL3,
    },
    {
      name: "Santiago Matias",
      userName: "SantiagoM",
      mesigue: true,
      avatar: imgURL4,
    }
  ];

  return (
    <section className="Menu_TW">
      {users.map(({ userName, name, mesigue, avatar }) => (
        <TwitterCard  
        key={userName}
         userName={userName}
          inicialSeguido={mesigue}
           avatar={avatar}
            name={name} 
            
            />
      ))}
    </section>
  );
}

export default App;
