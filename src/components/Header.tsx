import { Button, Link } from "@mui/material";


export const Header = () => {
  return (

    <div className="bg-green-300 w-full h-18 flex justify-between items-center p-8">


      <div className="flex items-center justify-start"> 
        <h1 className="flex items-center justify-between gap-2 text-2xl">
          <img src="/dog.png" alt="logo" className="h-12" /> Melhor amigo
        </h1>
      </div>


      <div className="flex px-4 justify-end gap-4">
          {butao("Produtos")}
          {butao("Galeria")}
          {butao("Contato")}
        </div>
    </div>
  );
};

const butao = (content: string) =>{
  return (
    <Button
            sx={{
              padding: "12px 8px 2px 8px",
              color: "black",
              textAlign: "center",
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              outline: "none",
              textTransform: "none",
              fontSize: "12pt",
              
              borderBottom: "3px solid transparent", 
              transition: "border-color 0.3s ease",
              
              "&:hover": {
                backgroundColor: "transparent",
                borderBottomColor: "#32AB35",
              },
              
              "&:focus-visible": {
                border: "none",
                boxShadow: "none",
                outline: "none",
                borderBottomColor: "#32AB35", 
              },
            }}
            variant="text"
            size="medium"
          >
            {content}
          </Button>
        )
}