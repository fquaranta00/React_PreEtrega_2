import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

  const productos = [
    {
      id: 1,
      nombre: "Garbanzos",
      description:
        "Estos deliciosos garbanzos son una excelente fuente de proteínas y fibra. Son ideales para preparar sopas, guisos y ensaladas.",
      stock: 8,
      category: "legumbres",
      img: "imagen-garbanzos.jpg", // Ruta de la imagen de los garbanzos
    },
    {
      id: 2,
      nombre: "Queso Sardo",
      description:
        "El queso sardo es un producto lácteo de sabor intenso y textura cremosa. Perfecto para acompañar platos de pasta y gratinados.",
      stock: 15,
      category: "lacteos",
      img: "imagen-queso-sardo.jpg", 
    },
    {
      id: 3,
      nombre: "Dulce de Higo",
      description:
        "Nuestro dulce de higo es una exquisita combinación de higos frescos y azúcar. Ideal para untar en pan o acompañar quesos.",
      stock: 5,
      category: "dulces",
      img: "imagen-dulce-de-higo.jpg", 
    },
    {
      id: 4,
      nombre: "Harina integral x 1kg",
      description:
        "Nuestra harina integral es molida a partir de granos de trigo de alta calidad. Es perfecta para preparar panes y masas saludables.",
      stock: 10,
      category: "harinas",
      img: "imagen-harina-integral.jpg", 
    },
    {
      id: 5,
      nombre: "Maní tostado",
      description:
        "Nuestro maní tostado es un snack delicioso y saludable. Está lleno de nutrientes y es perfecto para picar entre comidas.",
      stock: 12,
      category: "varios",
      img: "imagen-mani-tostado.jpg", 
    },
    {
      id: 6,
      nombre: "Lentejas",
      description:
        "Las lentejas son una excelente fuente de proteínas vegetales y minerales. Son ideales para preparar guisos y sopas reconfortantes.",
      stock: 3,
      category: "legumbres",
      img: "imagen-lentejas.jpg", 
    },
    {
      id: 7,
      nombre: "Queso cremoso",
      description:
        "Nuestro queso cremoso tiene una textura suave y un sabor delicado. Perfecto para untar en pan o para preparar salsas.",
      stock: 7,
      category: "lacteos",
      img: "imagen-queso-cremoso.jpg", 
    },
    {
      id: 8,
      nombre: "Dulce de Durazno",
      description:
        "Nuestro dulce de durazno es una deliciosa conserva hecha con duraznos maduros y azúcar. Ideal para acompañar postres y helados.",
      stock: 2,
      category: "dulces",
      img: "imagen-dulce-de-durazno.jpg", 
    },
    {
      id: 9,
      nombre: "Harina integral 1/2kg",
      description:
        "Nuestra harina integral es molida a partir de granos de trigo de alta calidad. Es perfecta para preparar panes y masas saludables.",
      stock: 18,
      category: "harinas",
      img: "imagen-harina-integral-05kg.jpg", 
    },
    {
      id: 10,
      nombre: "Nachos y tortillas de maíz",
      description:
        "Nuestros nachos y tortillas de maíz son ideales para acompañar salsas y dips. Son perfectos para reuniones y ocasiones especiales.",
      stock: 9,
      category: "varios",
      img: "imagen-nachos-y-tortillas-de-maiz.jpg", 
    },
  ];



  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("no hay datos"))
    }
  })

  getProductos
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })


  return (
    <>
      <ItemDetail
        productos={productos}
      />
    </>
  )
}

export default ItemDetailContainer