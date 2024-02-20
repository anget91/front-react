import { Eye, Plus, SquarePen } from "lucide-react";
import { getEmpresas } from "../requests/getEmpresas";
import { useState, useEffect } from "react";

export function Empresas() {

  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const empresasData = await getEmpresas();
        setEmpresas(empresasData.listaempresas);
      } catch (error) {
        console.error('Error al obtener datos de empresas:', error);
      }
    }

    fetchData();
  }, []);
  return (

    <div className="w-full h-svh flex  flex-col items-center relative">
    <button  className="px-4 py-2 bg-vgreen text-white font-medium text-sm mt-8 rounded-lg flex gap-2 	align-self: flex-start	" >
      <Plus size={20} color="#FFFFFF"/>Añadir</button>
      <div className="h-14 w-[1400px] bg-white rounded-s-xl m-2 flex items-center">
          <h1 className="ml-12 text-vgraylight font-medium">Nombre</h1>
          <h1 className="ml-72 text-vgraylight font-medium text-center">Tipo identificacion</h1>
          <h1 className="ml-20 text-vgraylight font-medium text-center" >Número identificación</h1>
          <h1 className="ml-24 text-vgraylight font-medium">Teléfono</h1>
          <h1 className="ml-28 text-vgraylight font-medium text-center">Número de obras</h1>
      </div>

      {empresas.map((empresa, index) => (
        <div key={index} className="h-14 w-[1400px] bg-white rounded-s-xl m-2 flex items-center">
          <h1 className="ml-12 w-52  text-vgraydark font-semibold">{empresa.razonsocial}</h1>
          <h1 className="ml-52 text-vgraydark font-semibold">{empresa.tipodocumento}</h1>
          <h1 className="ml-44 w-32 text-vgraydark font-semibold">{empresa.numidentificacion}</h1>
          <h1 className="ml-28 w-32  text-vgraydark font-semibold">{empresa.telefono}</h1>
          <h1 className="ml-28 w-20 text-vgraydark font-semibold">{empresa.numobras}</h1>
          <button className="ml-14">
            <Eye color="#204ADF" />
          </button>
          <button className="ml-10">
            <SquarePen color="#00AF00" />
          </button>
        </div>
      ))}
    
      
      
    </div>
    
  )
}