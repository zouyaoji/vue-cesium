import type { Language } from '..'

export default {
  name: 'fr-fr',
  nativeName: 'Français (FR)',
  vc: {
    loadError: 'doit être un nœud enfant de VcViewer',
    navigation: {
      compass: {
        outerTip: 'Glisser l\'anneau extérieur : rotation de la vue. Double-cliquer : réinitialisation de la vue.',
        innerTip:
          'Manipuler le gyroscope interne : orbite libre. ASTUCE : Possibilité d\'orbiter librement en maintenant la touche CTRL tout en déplaçant la carte.',
        title: 'Cliquer et faire glisser pour pivoter la caméra.'
      },
      zoomCotrol: {
        zoomInTip: 'Zoomer',
        zoomResetTip: 'Réinitialiser le zoom',
        zoomOutTip: 'Dézoomer'
      },
      print: {
        printTip: 'Capture d\'écran/impression du viewer',
        printViewTitle: 'Vue d\'impression VueCesium',
        credit: 'Crédits de la carte',
        screenshot: 'Capture d\'écran'
      },
      myLocation: {
        myLocationTip: 'Centrer la carte sur la position actuelle',
        positioning: 'Positionnement...',
        fail: 'Échec du positionnement',
        centreMap: 'Ma position',
        lat: 'Latitude',
        lng: 'Longitude',
        address: 'Adresse'
      },
      statusBar: {
        lat: 'Lat',
        lng: 'Lng',
        zone: 'ZONE',
        e: 'E',
        n: 'N',
        elev: 'Élév.',
        level: 'Niv.',
        heading: 'Cap',
        pitch: 'Inclin.',
        roll: 'Roulis',
        cameraHeight: 'Haut. cam.',
        tip: 'Cliquer pour basculer l\'affichage des coordonnées de la souris vers des coordonnées en projection UTM'
      }
    },
    navigationSm: {
      compass: {
        outerTip: 'Manipuler l\'anneau extérieur : rotation de la vue. Double-clic : réinitialiser la vue.'
      },
      zoomCotrol: {
        zoomInTip: 'Zoomer',
        zoomBarTip: 'Faire glisser la barre vers le haut pour zoomer, vers le bas pour dézoomer.',
        zoomOutTip: 'Dézoomer'
      }
    },
    measurement: {
      'expand': 'Développer',
      'collapse': 'Réduire',
      'editor': {
        move: 'Déplacer le point',
        insert: 'Insérer un point',
        remove: 'Supprimer le point',
        removeAll: 'Supprimer tous les points'
      },
      'distance': {
        tip: 'Distance',
        drawingTipStart: 'Clic gauche pour définir le point de départ de la mesure.',
        drawingTipEnd: 'Clic gauche pour définir le point final de la mesure.',
        drawingTipEditing: 'Déplacer la souris pour ajuster le nœud, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'component-distance': {
        tip: 'Distance de composant',
        drawingTipStart: 'Clic gauche pour définir le point de départ de la mesure.',
        drawingTipEnd: 'Clic gauche pour définir le point d\'arrivée de la mesure.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'polyline': {
        tip: 'Distance de ligne brisée',
        drawingTipStart: 'Clic gauche pour définir le point de départ de la mesure.',
        drawingTipEnd: 'Clic gauche pour définir le point suivant, double-clic gauche pour valider.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'horizontal': {
        tip: 'Distance horizontale',
        drawingTipStart: 'Clic gauche pour définir le point de départ de la mesure.',
        drawingTipEnd: 'Clic gauche pour définir le point suivant, double-clic gauchepour déterminer la mesure.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'vertical': {
        tip: 'Distance verticale',
        drawingTipStart: 'Clic gauche pour définir le point de départ de la mesure.',
        drawingTipEnd: 'Clic gauche pour définir le point suivant, double-clic gauche pour déterminer la mesure.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'height': {
        tip: 'Hauteur',
        drawingTipStart: 'Clic gauche pour définir le point de départ de la mesure.',
        drawingTipEnd: 'Clic gauche pour définir le point d\'arrivée de la mesure.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'area': {
        tip: 'Surface',
        drawingTipStart: 'Clic gauche pour définir le premier point.',
        drawingTipEnd: 'Clic gauche pour définir le point suivant, double-clic gauche pour déterminer la mesure.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'point': {
        tip: 'Coordonnées de point',
        drawingTipStart: 'Clic gauche pour définir le premier point.',
        drawingTipEnd: 'Clic gauche pour déterminer la mesure',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.',
        lng: 'Lng :',
        lat: 'Lat :',
        height: 'Hauteur :',
        slope: 'Pente :'
      },
      'rectangle': {
        tip: 'Rectangle',
        drawingTipStart: 'Clic gauche pour commencer la mesure.',
        drawingTipEnd: 'Clic gauche pour déterminer la mesure',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'regular': {
        tip: 'Régulier',
        drawingTipStart: 'Clic gauche pour commencer la mesure.',
        drawingTipEnd: 'Clic gauche pour déterminer la mesure',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'circle': {
        tip: 'Cercle',
        drawingTipStart: 'Clic gauche pour commencer la mesure.',
        drawingTipEnd: 'Clic gauche pour déterminer la mesure',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      'clear': {
        tip: 'Effacer les résultats de la mesure'
      }
    },
    drawing: {
      expand: 'Développer',
      collapse: 'Réduire',
      editor: {
        move: 'Déplacer le point',
        insert: 'Insérer un point',
        remove: 'Supprimer le point',
        removeAll: 'Supprimer tous les points'
      },
      pin: {
        tip: 'Ajouter un marqueur',
        drawingTipStart: 'Clic gauche pour ajouter un marqueur.',
        drawingTipEnd: 'Clic gauche pour ajouter un marqueur.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      point: {
        tip: 'Dessiner un point',
        drawingTipStart: 'Clic gauche pour pour dessiner un point.',
        drawingTipEnd: 'Clic gauche pour pour dessiner un point.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      polyline: {
        tip: 'Dessiner une ligne brisée',
        drawingTipStart: 'Clic gauche pour pour définir le premier point.',
        drawingTipEnd: 'Clic gauche pour pour définir le point suivant, double-Clic gauche pour pour terminer le dessin.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      polygon: {
        tip: 'Dessiner un polygone',
        drawingTipStart: 'Clic gauche pour pour définir le premier point.',
        drawingTipEnd: 'Clic gauche pour pour définir le point suivant, double-Clic gauche pour pour terminer le dessin.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      rectangle: {
        tip: 'Dessiner un rectangle',
        drawingTipStart: 'Clic gauche pour pour définir un coin du rectangle.',
        drawingTipEnd: 'Clic gauche pour pour définir l\'autre coin et terminer le dessin.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      circle: {
        tip: 'Dessiner un cercle',
        drawingTipStart: 'Clic gauche pour pour définir le centre du cercle.',
        drawingTipEnd: 'Clic gauche pour pour définir le rayon et terminer le dessin.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      regular: {
        tip: 'Dessiner un polygone régulier',
        drawingTipStart: 'Clic gauche pour pour définir le premier point du polygone régulier.',
        drawingTipEnd: 'Clic gauche pour pour définir le point suivant et terminer le dessin.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      clear: {
        tip: 'Effacer tous les dessins'
      }
    },
    analysis: {
      expand: 'Développer',
      collapse: 'Réduire',
      editor: {
        move: 'Déplacer le point',
        insert: 'Insérer un point',
        remove: 'Supprimer le point',
        removeAll: 'Supprimer tous les points'
      },
      sightline: {
        tip: 'Analyse de la ligne de vue',
        drawingTipStart: 'Clic gauche pour pour définir le point de vue.',
        drawingTipEnd: 'Clic gauche pour pour définir le point suivant, double-clic gauche pour pour déterminer l\'analyse.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      viewshed: {
        tip: 'Analyse du champ de vision',
        drawingTipStart: 'Clic gauche pour pour définir le point de vue.',
        drawingTipEnd: 'Clic gauche pour pour définir le point suivant et terminer l\'analyse.',
        drawingTipEditing: 'Déplacer la souris pour ajuster, clic gauche pour confirmer,\nclic droit pour annuler.'
      },
      clear: {
        tip: 'Effacer les résultats de l\'analyse'
      }
    },
    overview: {
      show: 'Afficher',
      hidden: 'Caché'
    },
    typhoon: {
      warn: 'Échec de la lecture du typhon, raison : aucune donnée correspondant au numéro de typhon.'
    }
  }
} as Language
