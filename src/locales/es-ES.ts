import { LocaleData } from "@/type";
import esES from "antd/locale/es_ES";

const localeData: LocaleData = {
  antLocale: esES,
  logo: "Pic Smaller",
  initial: "Inicializando",
  previewHelp:
    "Arrastra la línea divisoria para comparar el efecto de compresión: a la izquierda es la imagen original, a la derecha es la imagen comprimida",
  uploadCard: {
    title: "Selecciona o arrastra tus imágenes aquí",
    subTitle: "Formatos soportados: %s",
    pasteHint: "💡 Pega con Ctrl+V o arrastra imágenes aquí",
  },
  listAction: {
    batchAppend: "Añadir imagenes",
    addFolder: "Añadir carpeta",
    clear: "Eliminar todas",
    downloadAll: "Guardar todas",
    downloadOne: "Guardar imagen",
    removeOne: "Eliminar imagen",
    reCompress: "Recomprimir",
  },
  columnTitle: {
    status: "Estado",
    name: "Nombre",
    preview: "Miniatura",
    size: "Tamaño",
    dimension: "Resolución",
    decrease: "Compresión",
    action: "Acciones",
    newSize: "Nuevo tamaño",
    newDimension: "Nueva resolución",
  },
  optionPannel: {
    failTip:
      "Imposible de reducir más el tamaño, por favor ajusta los parámetros e inténtalo de nuevo.",
    help: "Pic Smaller es una aplicación de compresión de imágenes por lotes. Las modificaciones se aplicarán a todas las imágenes.",
    resizeLable: "Cambia el tamaño de la imagen",
    jpegLable: "Parámetros JPEG/WEBP",
    pngLable: "Parámetros PNG",
    gifLable: "Parámetros GIF",
    avifLable: "Parámetros AVIF",
    resizePlaceholder: "Selecciona el ajuste de tamaño",
    fitWidth: "Ajusta la anchura, la altura se escala automáticamente",
    fitHeight: "Ajusta la altura, la anchura se escala automáticamente",
    setShort:
      "Ajusta el lado más corto, el lado más largo se adaptará automáticamente",
    setLong:
      "Ajusta el lado más largo, el lado más corto se adaptará automáticamente",
    setCropRatio: "Modo de recorte, establecer proporción de recorte",
    setCropSize: "Modo de recorte, establecer tamaño de recorte",
    cwRatioPlaceholder: "Establecer relación de ancho",
    chRatioPlaceholder: "Establecer relación de altura",
    cwSizePlaceholder: "Establecer ancho de recorte",
    chSizePlaceholder: "Establecer altura de recorte",
    widthPlaceholder: "Ajusta la anchura de la imagen",
    heightPlaceholder: "Ajusta la altura de la imagen",
    shortPlaceholder: "Ajusta el lado mas corto de la imagen",
    longPlaceholder: "Ajusta el lado mas largo de la imagen",
    resetBtn: "Reiniciar ajustes",
    confirmBtn: "Aplicar ajustes",
    qualityTitle: "Calidad de imagen (0-1)",
    colorsDesc: "Número de colores de salida (2-256)",
    pngDithering: "Coeficiente de difuminado (0-1)",
    gifDithering: "Difuminado",
    avifQuality: "Calidad de imagen (1-100)",
    avifSpeed: "Velocidad de compresión (1-10)",
    outputFormat: "Formato de fichero",
    outputFormatPlaceholder: "Selecciona el formato de imagen",
    transparentFillDesc: "Elige un color de relleno transparente",
    cropCompareWarning:
      "El modo de recorte no admite la vista previa de comparación",
  },
  error404: {
    backHome: "Volver al inicio",
    description: "Lo siento, la página visitada no existe~",
  },
  progress: {
    before: "Antes de comprimir",
    after: "Después de comprimir",
    rate: "Índice de compresión",
  },
};

export default localeData;
