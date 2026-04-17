import { LocaleData } from "@/type";
import frFR from "antd/locale/fr_FR";

const localeData: LocaleData = {
  antLocale: frFR,
  logo: "Pic Smaller",
  initial: "Initialisation",
  previewHelp:
    "Faites glisser la ligne de séparation pour comparer l'effet de compression : l'image de gauche est l'image originale, celle de droite est l'image compressée",
  uploadCard: {
    title: "Déposez vos images ici",
    subTitle: "Formats supportés : %s",
    pasteHint: "💡 Collez avec Ctrl+V ou glissez vos images ici",
  },
  listAction: {
    batchAppend: "Ajouter des fichiers",
    addFolder: "Ajouter dossier",
    clear: "Tout retirer",
    downloadAll: "Tout sauvegarder",
    downloadOne: "Sauvegarder l'image",
    removeOne: "Retirer l'image",
    reCompress: "Relancer compression",
  },
  columnTitle: {
    status: "Status",
    name: "Nom",
    preview: "Aperçu",
    size: "Taille",
    dimension: "Dimensions",
    decrease: "Réduction",
    action: "Action",
    newSize: "Nouvelle taille",
    newDimension: "Nouvelles dimensions",
  },
  optionPannel: {
    failTip:
      "Impossible de réduire la taille, veuillez ajuster les paramètres et réessayer.",
    help: "Pic Smaller est une application de compression d'images par lot. Les modifications apportées aux options seront appliquées à toutes les images.",
    resizeLable: "Redimensionner l'image",
    jpegLable: "Paramètres JPEG/WEBP",
    pngLable: "Paramètres PNG",
    gifLable: "Paramètres GIF",
    avifLable: "Paramètres AVIF",
    resizePlaceholder: "Sélectionner le mode d'ajustement",
    fitWidth: "Régler la largeur, la hauteur s'ajuste automatiquement",
    fitHeight: "Régler la hauteur, la largeur s'ajuste automatiquement",
    setShort: "Régler le petit côté, le long côté s'ajuste automatiquement",
    setLong: "Régler le long côté, le petit côté s'ajuste automatiquement",
    setCropRatio: "Mode de recadrage, définir le rapport de recadrage",
    setCropSize: "Mode recadrage, définir la taille du recadrage",
    cwRatioPlaceholder: "Définir le rapport de largeur",
    chRatioPlaceholder: "Définir le rapport de hauteur",
    cwSizePlaceholder: "Définir la largeur du recadrage",
    chSizePlaceholder: "Définir la hauteur de recadrage",
    widthPlaceholder: "Largeur de l'image de sortie",
    heightPlaceholder: "Hauteur de l'image de sortie",
    shortPlaceholder: "Longueur du petit côté de l'image de sortie",
    longPlaceholder: "Longueur du côté long de l'image de sortie",
    resetBtn: "Réinitialiser",
    confirmBtn: "Appliquer",
    qualityTitle: "Qualité de l'image de sortie (0-1)",
    colorsDesc: "Nombre de couleurs de sortie (2-256)",
    pngDithering: "Coefficient de tramage (0-1)",
    gifDithering: "Activer le tramage",
    avifQuality: "Qualité de l'image de sortie (1-100)",
    avifSpeed: "Vitesse de compression (1-10)",
    outputFormat: "Format de sortie",
    outputFormatPlaceholder: "Format de l'image de sortie",
    transparentFillDesc: "Couleur de remplissage transparente",
    cropCompareWarning:
      "Le mode Recadrage ne prend pas en charge l'aperçu de comparaison",
  },
  error404: {
    backHome: "Retour à l'accueil",
    description: "Désolé, la page que vous avez visitée n'existe pas~",
  },
  progress: {
    before: "Avant compression",
    after: "Après compression",
    rate: "Taux de diminution",
  },
};

export default localeData;
