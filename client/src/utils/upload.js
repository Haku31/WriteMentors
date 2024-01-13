import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "WriteMentor");

  try {
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dflpcpmaa/image/upload',
      data
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.error('Error al subir el archivo:', err);
    if (err.response) {
      // La respuesta del servidor tiene detalles específicos del error
      console.error('Detalles del error del servidor:', err.response.data);
    }
    // Puedes agregar más manejo de errores según sea necesario
  }
};

export default upload
