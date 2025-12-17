import { Button} from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-linear-to-r from-green-500 to-green-400 w-full shadow-lg">
      <div className="max-w-full mx-auto flex justify-between items-center px-8 py-4">
        
        {/* Logo e Nome */}
        <div className="flex items-center justify-start hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"> 
          <Link to={"/"}><h1 className="flex items-center gap-3 text-3xl font-bold text-white drop-shadow-md">
            <img 
              src="/dog.png" 
              alt="logo" 
              className="h-14 w-14 bg-white rounded-full p-2 shadow-md" 
            /> 
            Melhor Amigo
          </h1></Link>
        </div>

        <div className="flex gap-3 justify-end">
          <Link to={"/produtos"}>{botao("Produtos")}</Link>
          <Link to={"/galeria"}>{botao("Galeria")}</Link>
          <Link to={"/contato"}>{botao("Contato")}</Link>
        </div>
        
      </div>
    </div>
  );
};

const botao = (content: string) => {
  return (
    <Button
      sx={{
        padding: "10px 24px",
        color: "white",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        border: "2px solid white",
        borderRadius: "12px",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: "600",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        
        transition: "all 0.3s ease",
        
        "&:hover": {
          backgroundColor: "white",
          color: "#22c55e",
          transform: "translateY(-2px)",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        },
        
        "&:active": {
          transform: "translateY(0px)",
        },
      }}
      variant="contained"
    >
      {content}
    </Button>
  );
};