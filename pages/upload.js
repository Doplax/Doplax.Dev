import { Layout } from "../components/Layout";

export default function Upload() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const file = formData.get("file");

    if (!file) {
      alert("Selecciona un archivo para subir.");
      return;
    }

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Archivo subido con éxito.");
    } else {
      alert("Error al subir el archivo.");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h1 className="text-3xl mb-4">Subir archivo MDX</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" name="file" accept=".mdx" />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4" type="submit">
            Subir archivo
          </button>
        </form>
      </div>
    </Layout>
  );
}
