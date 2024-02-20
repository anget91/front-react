import Cookies from "js-cookie";

export async function getEmpresas(){

    const token = Cookies.get('session') ? JSON.parse(Cookies.get('session')).token : '';

    try {
        const url = new URL('http://localhost:8080/api/bussiness/getall');
    
        // Agrega los parámetros a la URL
        url.searchParams.append('searchTerm', '');
        url.searchParams.append('page', '');
    
        const result = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          
        });
      
        if (result.status === 200) {
            const data = await result.json();
      return data;
        } else {
          throw new Error('Error al obtener los datos');
        }
      } catch (error) {
        throw new Error('Error al obtener los datos');
      }
  }