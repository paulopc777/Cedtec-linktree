import { MarqueeDemo } from "./components/Cases/MainCases";
import CustomButton from "./components/CustomButton";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

const links = {
  zap: "https://api.whatsapp.com/send?phone=5527981415473&text=Gostaria%20de%20saber%20mais%20sobre%20o%20cursos",
  instagram: "https://www.instagram.com/cedtec/",
  site: "https://cedtec.com.br/",
};
function App() {
  return (
    <div className="h-full w-full gap-4 flex justify-center items-center flex-col relative">
      <div className="">
        <Avatar className="w-36 h-36">
          <AvatarImage src="https://media.licdn.com/dms/image/v2/C4E0BAQGckCroV-FNCA/company-logo_200_200/company-logo_200_200/0/1630595004331?e=2147483647&v=beta&t=3BVolq-g9e-Trou-y1kAwsGViq0-Wy55XzZ52PZeErU" />
          <AvatarFallback>DC</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-2">
        <CustomButton
          Message="Whatsapp"
          color="#03A84A"
          BeforeMessage="Carregando"
          href={links.zap}
        />
        <CustomButton
          Message="Instagram"
          color="#03A84A"
          BeforeMessage="Carregando"
          href={links.instagram}
        />
        <CustomButton
          Message="Web Site"
          color="#03A84A"
          BeforeMessage="Carregando"
          href={links.site}
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default App;
